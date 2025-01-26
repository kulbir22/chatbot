import React, { useState, useEffect } from "react";
import ChatWindow from "./Chatbot/ChatWindow";
import "./MainPage.css";
import dummyData from "../src/Resources/dummyData.json"; // Adjust the path
import qualityImage from "./Resources/quality.png";
import qaImage from "./Resources/qa2.png";
import rsaImage from "./Resources/rsa.png";
import { useNavigate } from "react-router-dom";
import floorthumbnail from "./Resources/floorthumb.jpg";
import counterthumbnail from "./Resources/counterthumb.jpg";
import dummyData2 from "./Resources/countertopData.json";
import notsureimage from "./Resources/notsure2.png";
import marblethumbnail from "./Resources/marbleThumbnail.jpg";
import granitethumbnail from "./Resources/graniteThumbnail.jpg";
import dummyData3 from "./Resources/segment.json";

const MainPage = () => {
  const [messages, setMessages] = useState([]);
  const [jsonData, setJsonData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [threadID, setThreadID] = useState("");
  const [loadingIndex, setLoadingIndex] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [firstReco, setFirstReco] = useState(true);
  const [uploadRoomButtonCount, setUploadRoomButtonCount] = useState(0);
  const [isCountertop, setIsisCountertop] = useState(false);
  const [countertopData, setcountertopData] = useState([]);
  const [segmentData, setSegmentData] = useState([]);

  const endpoint = "http://127.0.0.1:5000";

  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    setJsonData(dummyData); // Load dummyData when the component mounts
    setcountertopData(dummyData2);
    setSegmentData(dummyData3);
    const defaultMessage = {
      sender: "bot",
      type: "imageoptions",
      options: ["Flooring", "Countertop"],
      text: "Hi there! I'm MSI Chatbot, your go-to guide for surfaces. Please choose an option to begin:",
      images: [floorthumbnail, counterthumbnail],
    };
    setMessages((prevMessages) => [...prevMessages, defaultMessage]);
  }, []);

  const incrementUploadCount = () => {
    setUploadRoomButtonCount((prevCount) => prevCount + 1); // Increment the count by 1
  };
  const handleSendMessage = async (text, id = null) => {
    const userMessage = {
      sender: "user",
      text,
      type: "text",
    };

    // Add the user message to the conversation
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    if (text.toLowerCase() === "countertop") {
      setIsisCountertop(true);
      await processCountertopMessage(text);
      return;
    } else if (isCountertop) {
      await processCountertopMessage(text);
      return;
    } else {
      setIsisCountertop(false);
      await processOtherMessage(text);
    }
  };

  const handleSelectedTile = async (tileUrl) => {
    if (isCountertop) {
      setLoading(true);
      const matchingTile = countertopData.find(
        (tile) => tile.main_image_url === tileUrl
      );
      const thumbnailUrl = matchingTile.thumbnail_url;

      const userMessage = { sender: "user", text: thumbnailUrl, type: "tile" };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      if (matchingTile) {
        const { main_image_url, thumbnail_url, modal_url, ...filteredTile } =
          matchingTile; // Destructure and exclude unwanted keys

        const name = matchingTile.product_name;

        const jsonString = JSON.stringify(filteredTile); // Stringify the filtered object

        const payloadMessage = `User is interested in the countertop ${name}: ${jsonString}`;
        const payload = new FormData();
        payload.append("user_input", payloadMessage);
        payload.append("thread_id", threadID);

        if (firstReco) {
          payload.append("first_reco", firstReco);
        } else {
          payload.append("first_reco", false);
        }

        try {
          const response = await fetch(
            `${endpoint}/send_countertop_message_chat`,
            {
              method: "POST",
              body: payload,
            }
          );

          if (!response.ok) throw new Error("Network response was not ok");

          const data = await response.json();
          setThreadID(data.thread_id);

          const botResponse = getBotResponse(data.assistant_response);
          setMessages((prevMessages) => [...prevMessages, botResponse]);

          if (
            data.assistant_response.response_type.toLowerCase() === "tiles" &&
            data.assistant_response.response.query_so_far &&
            data.assistant_response.response.query_so_far.length > 0
          ) {
            const userQueryResponse = {
              sender: "bot",
              text: data.assistant_response.response.query_so_far,
              type: "text",
            };
            setMessages((prevMessages) => [...prevMessages, userQueryResponse]);
          }

          if (
            uploadRoomButtonCount < 2 &&
            data.assistant_response.user_want_to_upload
          ) {
            incrementUploadCount();
            const uploadResponse = { sender: "bot", type: "upload" };
            setMessages((prevMessages) => [...prevMessages, uploadResponse]);
          }
          if (
            data.assistant_response.follow_up &&
            data.assistant_response.follow_up.length > 0
          ) {
            const followUpResponse = {
              sender: "bot",
              text: data.assistant_response.follow_up,
              type: "text",
            };
            setMessages((prevMessages) => [...prevMessages, followUpResponse]);
          }
        } catch (error) {
          // console.error("Error:", error);
          const errorMessage = {
            sender: "bot",
            text: "Sorry, something went wrong. Please try again.",
            type: "text",
          };
          setMessages((prevMessages) => [...prevMessages, errorMessage]);
        } finally {
          setLoading(false);
        }
      }
    } else {
      setLoading(true);
      const matchingTile = jsonData.find(
        (tile) => tile.main_image_url === tileUrl
      );

      const userMessage = { sender: "user", text: tileUrl, type: "tile" };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      if (matchingTile) {
        const { main_image_url, ...filteredTile } = matchingTile; // Destructure and exclude unwanted keys

        const name = matchingTile.product_name;

        const jsonString = JSON.stringify(filteredTile); // Stringify the filtered object

        const payloadMessage = `User is interested in the flooring ${name}: ${jsonString}`;
        const payload = new FormData();
        payload.append("user_input", payloadMessage);
        payload.append("thread_id", threadID);

        if (firstReco) {
          payload.append("first_reco", firstReco);
        } else {
          payload.append("first_reco", false);
        }

        try {
          const response = await fetch(`${endpoint}/send_message_chat`, {
            method: "POST",
            body: payload,
          });

          if (!response.ok) throw new Error("Network response was not ok");

          const data = await response.json();
          setThreadID(data.thread_id);

          const botResponse = getBotResponse(data.assistant_response);
          setMessages((prevMessages) => [...prevMessages, botResponse]);
          if (
            data.assistant_response.response_type.toLowerCase() === "tiles" &&
            data.assistant_response.response.query_so_far &&
            data.assistant_response.response.query_so_far.length > 0
          ) {
            const userQueryResponse = {
              sender: "bot",
              text: data.assistant_response.response.query_so_far,
              type: "text",
            };
            setMessages((prevMessages) => [...prevMessages, userQueryResponse]);
          }

          if (data.assistant_response.visualize_it) {
            const matchingTile = jsonData.find(
              (tile) =>
                tile.product_name.toLowerCase() ===
                data.assistant_response.visualize_it.toLowerCase()
            );
            const visualId = matchingTile.visual_id;
            const visualMessage = {
              sender: "bot",
              text: matchingTile.product_name,
              visualId: visualId,
              type: "visualize",
            };
            setMessages((prevMessages) => [...prevMessages, visualMessage]);
          }
          if (
            uploadRoomButtonCount < 2 &&
            data.assistant_response.user_want_to_upload
          ) {
            incrementUploadCount();
            const uploadResponse = { sender: "bot", type: "upload" };
            setMessages((prevMessages) => [...prevMessages, uploadResponse]);
          }
          if (
            data.assistant_response.follow_up &&
            data.assistant_response.follow_up.length > 0
          ) {
            const followUpResponse = {
              sender: "bot",
              text: data.assistant_response.follow_up,
              type: "text",
            };
            setMessages((prevMessages) => [...prevMessages, followUpResponse]);
          }
        } catch (error) {
          // console.error("Error:", error);
          const errorMessage = {
            sender: "bot",
            text: "Sorry, something went wrong. Please try again.",
            type: "text",
          };
          setMessages((prevMessages) => [...prevMessages, errorMessage]);
        } finally {
          setLoading(false);
        }
      }
    }
  };

  const handleUpload = async (file) => {
    if (file) {
      // Check file size (less than 5MB)
      if (file.size > 5 * 1024 * 1024) {
        const errorMessage = {
          sender: "bot",
          text: "Sorry, File size should be less than 5 MB.",
          type: "text",
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
        return;
      }
    }

    setLoading(true);
    const imageUrl = URL.createObjectURL(file);
    const userMessage = {
      sender: "user",
      text: file.name,
      type: "image",
      imageUrl: imageUrl,
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    const image_metadata_payload = new FormData();
    image_metadata_payload.append("user_input", file.name);
    image_metadata_payload.append("image", file);
    image_metadata_payload.append("email", userEmail);
    setLoadingIndex(messages.length);

    const existingData = segmentData.find(
      (item) => item.filename === file.name
    );
    let data;
    try {
      if (existingData) {
        const response = await fetch(`${endpoint}/segmented_image`, {
          method: "POST",
          body: image_metadata_payload,
        });

        if (!response.ok) throw new Error("Network response was not ok");
        setUploadRoomButtonCount(3);
        data = await response.json();
      } else {
        const response = await fetch(`${endpoint}/segment_image`, {
          method: "POST",
          body: image_metadata_payload,
        });

        if (!response.ok) throw new Error("Network response was not ok");

        setUploadRoomButtonCount(3);

        data = await response.json();
      }
      console.log(data);
      if (data.imageUrl) {
        const segmentedUrl = data.imageUrl; // Check the base64 string logged in the console
        const newSegmentMessage = {
          type: "segment",
          imageUrl: imageUrl,
          segmentedUrl: segmentedUrl,
          sender: "user",
        };
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1),
          newSegmentMessage,
        ]);
      }

      if (data.metadata) {
        const imageDataResponse = {
          sender: "bot",
          text: data.metadata,
          type: "metadatatext",
        };
        setMessages((prevMessages) => [...prevMessages, imageDataResponse]);
        const payload = new FormData();
        payload.append(
          "user_input",
          `Suggest me some good products for my room explained in image metdata as following:, ${data.metadata}`
        );
        payload.append("thread_id", threadID);
        if (firstReco) {
          payload.append("first_reco", firstReco);
          setFirstReco(false);
        } else {
          payload.append("first_reco", false);
        }
        if (isCountertop) {
          try {
            const response = await fetch(
              `${endpoint}/send_countertop_message_chat`,
              {
                method: "POST",
                body: payload,
              }
            );

            if (!response.ok) throw new Error("Network response was not ok");

            const data = await response.json();
            console.log(data);
            setThreadID(data.thread_id);

            if (
              data.assistant_response.response_type.toLowerCase() === "tiles" &&
              data.assistant_response.response.query_so_far &&
              data.assistant_response.response.query_so_far.length > 0
            ) {
              const userQueryResponse = {
                sender: "bot",
                text: data.assistant_response.response.query_so_far,
                type: "text",
              };
              setMessages((prevMessages) => [
                ...prevMessages,
                userQueryResponse,
              ]);
            }

            const botResponse = getBotResponse(data.assistant_response);
            setMessages((prevMessages) => [...prevMessages, botResponse]);

            if (
              data.assistant_response.follow_up &&
              data.assistant_response.follow_up.length > 0
            ) {
              const followUpResponse = {
                sender: "bot",
                text: data.assistant_response.follow_up,
                type: "text",
              };
              setMessages((prevMessages) => [
                ...prevMessages,
                followUpResponse,
              ]);
            }
          } catch (error) {
            // console.error("Error:", error);
            const errorMessage = {
              sender: "bot",
              text: "Sorry, something went wrong. Please try again.",
              type: "text",
            };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
          }
        } else {
          try {
            const response = await fetch(`${endpoint}/send_message_chat`, {
              method: "POST",
              body: payload,
            });

            if (!response.ok) throw new Error("Network response was not ok");

            const data = await response.json();
            console.log(data);
            setThreadID(data.thread_id);

            if (
              data.assistant_response.response_type.toLowerCase() === "tiles" &&
              data.assistant_response.response.query_so_far &&
              data.assistant_response.response.query_so_far.length > 0
            ) {
              const userQueryResponse = {
                sender: "bot",
                text: data.assistant_response.response.query_so_far,
                type: "text",
              };
              setMessages((prevMessages) => [
                ...prevMessages,
                userQueryResponse,
              ]);
            }

            const botResponse = getBotResponse(data.assistant_response);
            setMessages((prevMessages) => [...prevMessages, botResponse]);

            if (data.assistant_response.visualize_it) {
              const matchingTile = jsonData.find(
                (tile) =>
                  tile.product_name.toLowerCase() ===
                  data.assistant_response.visualize_it.toLowerCase()
              );
              const visualId = matchingTile.visual_id;
              const visualMessage = {
                sender: "bot",
                text: matchingTile.product_name,
                visualId: visualId,
                type: "visualize",
              };
              setMessages((prevMessages) => [...prevMessages, visualMessage]);
            }
            if (
              data.assistant_response.follow_up &&
              data.assistant_response.follow_up.length > 0
            ) {
              const followUpResponse = {
                sender: "bot",
                text: data.assistant_response.follow_up,
                type: "text",
              };
              setMessages((prevMessages) => [
                ...prevMessages,
                followUpResponse,
              ]);
            }
          } catch (error) {
            // console.error("Error:", error);
            const errorMessage = {
              sender: "bot",
              text: "Sorry, something went wrong. Please try again.",
              type: "text",
            };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
          }
        }
      }
    } catch (error) {
      // console.error("Error:", error);
      const errorMessage = {
        sender: "bot",
        text: "Sorry, something went wrong. Please try again.",
        type: "text",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
      setLoadingIndex(null);
    }
  };

  const getBotResponse = (data) => {
    const response_type = data.response_type;
    const response = data.response;
    const storesOptions = data.store;

    if (response_type.toLowerCase() === "tiles") {
      setFirstReco(false);
      return {
        sender: "bot",
        type: "tiles",
        tiles: response.tiles,
        headertext: response.header_text,
        footertext: response.footer_text,
      };
    } else if (response_type.toLowerCase() === "options") {
      // Create a variable to store URLs found in options
      let images = [];
      let currentOptions = [];
      // Loop through the options array and check for the URL pattern
      response.options.forEach((option) => {
        // Check if the option contains the specific URL pattern
        if (option.includes("https://cdn.msisurfaces.com/")) {
          if (option.includes("arabescus-white-marble.jpg")) {
            currentOptions.push("Marble");
            images.push(marblethumbnail);
          } else if (option.includes("gray-atlantico-granite.jpg")) {
            currentOptions.push("Granite");
            images.push(granitethumbnail);
          }
        }
      });

      // If images are found in options, return with image options
      if (images.length > 0) {
        currentOptions.push("Not Sure");
        images.push(notsureimage);
        return {
          sender: "bot",
          type: "imageoptions", // Type for image-based response
          options: currentOptions, // Your options
          text: response.text,
          images: images, // Add found image URLs to the response
        };
      } else {
        // If no image URLs are found, return a standard options response
        return {
          sender: "bot",
          type: "options",
          options: response.options,
          text: response.text,
        };
      }
    } else if (response_type.toLowerCase() === "collapsible") {
      return {
        sender: "bot",
        type: "collapsible",
        options: response.options,
        text: response.text,
      };
    } else if (response_type.toLowerCase() === "email") {
      return {
        sender: "bot",
        text: response.confirmation_message,
        type: "text",
      };
    } else if (response_type.toLowerCase() === "store") {
      return {
        sender: "bot",
        type: "store",
        options: storesOptions,
        text: "The closest stores for you are:",
      };
    }
    return { sender: "bot", text: response, type: "text" };
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  const processCountertopMessage = async (text) => {
    setLoading(true);
    const payload = new FormData();
    payload.append("user_input", text);
    payload.append("thread_id", threadID);
    if (firstReco) {
      payload.append("first_reco", firstReco);
    } else {
      payload.append("first_reco", false);
    }

    try {
      const response = await fetch(`${endpoint}/send_countertop_message_chat`, {
        method: "POST",
        body: payload,
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      console.log(data);
      setThreadID(data.thread_id);
      const botResponse = getBotResponse(data.assistant_response);
      setMessages((prevMessages) => [...prevMessages, botResponse]);

      if (
        data.assistant_response.response_type.toLowerCase() === "tiles" &&
        data.assistant_response.response.query_so_far &&
        data.assistant_response.response.query_so_far.length > 0
      ) {
        const userQueryResponse = {
          sender: "bot",
          text: data.assistant_response.response.query_so_far,
          type: "text",
        };
        setMessages((prevMessages) => [...prevMessages, userQueryResponse]);
      }

      if (
        uploadRoomButtonCount < 2 &&
        data.assistant_response.user_want_to_upload
      ) {
        incrementUploadCount();
        setUploadRoomButtonCount();
        const uploadResponse = { sender: "bot", type: "upload" };
        setMessages((prevMessages) => [...prevMessages, uploadResponse]);
      }
      if (
        data.assistant_response.follow_up &&
        data.assistant_response.follow_up.length > 0
      ) {
        const followUpResponse = {
          sender: "bot",
          text: data.assistant_response.follow_up,
          type: "text",
        };
        setMessages((prevMessages) => [...prevMessages, followUpResponse]);
      }
    } catch (error) {
      // console.error("Error:", error);

      // In case of an error, show a bot message indicating failure
      const errorMessage = {
        sender: "bot",
        text: "Sorry, something went wrong. Please try again.",
        type: "text",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };
  // Function to handle all other messages
  const processOtherMessage = async (text) => {
    setLoading(true);
    const payload = new FormData();
    payload.append("user_input", text);
    payload.append("thread_id", threadID);

    if (firstReco) {
      payload.append("first_reco", firstReco);
    } else {
      payload.append("first_reco", false);
    }

    try {
      const response = await fetch(`${endpoint}/send_message_chat`, {
        method: "POST",
        body: payload,
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      console.log(data);
      setThreadID(data.thread_id);
      const botResponse = getBotResponse(data.assistant_response);
      setMessages((prevMessages) => [...prevMessages, botResponse]);

      if (
        data.assistant_response.response_type.toLowerCase() === "tiles" &&
        data.assistant_response.response.query_so_far &&
        data.assistant_response.response.query_so_far.length > 0
      ) {
        const userQueryResponse = {
          sender: "bot",
          text: data.assistant_response.response.query_so_far,
          type: "text",
        };
        setMessages((prevMessages) => [...prevMessages, userQueryResponse]);
      }

      if (data.assistant_response.visualize_it) {
        const matchingTile = jsonData.find(
          (tile) =>
            tile.product_name.toLowerCase() ===
            data.assistant_response.visualize_it.toLowerCase()
        );
        const visualId = matchingTile.visual_id;
        const visualMessage = {
          sender: "bot",
          text: matchingTile.product_name,
          visualId: visualId,
          type: "visualize",
        };
        setMessages((prevMessages) => [...prevMessages, visualMessage]);
      }

      if (
        uploadRoomButtonCount < 2 &&
        data.assistant_response.user_want_to_upload
      ) {
        incrementUploadCount();
        setUploadRoomButtonCount();
        const uploadResponse = { sender: "bot", type: "upload" };
        setMessages((prevMessages) => [...prevMessages, uploadResponse]);
      }
      if (
        data.assistant_response.follow_up &&
        data.assistant_response.follow_up.length > 0
      ) {
        const followUpResponse = {
          sender: "bot",
          text: data.assistant_response.follow_up,
          type: "text",
        };
        setMessages((prevMessages) => [...prevMessages, followUpResponse]);
      }
    } catch (error) {
      // console.error("Error:", error);

      // In case of an error, show a bot message indicating failure
      const errorMessage = {
        sender: "bot",
        text: "Sorry, something went wrong. Please try again.",
        type: "text",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-page">
      <div className="main-landing-container">
        {/* Component 1 */}
        <div className="main-component-1">
          <div
            className="main-company-name"
            onClick={() => {
              navigate("/");
            }}
          >
            RARA AI
          </div>
          <div
            className="main-powered-by"
            onClick={() => {
              navigate("/");
            }}
          >
            Powered by VISUALEZ
          </div>
        </div>

        {/* Component 2 */}
        <div className="main-component-2">
          {isMobile ? (
            <>
              <div className="mobile-feature-card">
                <div className="mobile-image-container">
                  <img
                    src={qaImage}
                    alt="AI Chat"
                    className="mobile-feature-image"
                  />
                </div>

                <div className="mobile-text-container">
                  <h3 className="mobile-feature-title">
                    AI <strong>Chat</strong> Experience
                  </h3>
                </div>
              </div>
              <div className="mobile-feature-card">
                <div className="mobile-image-container">
                  <img
                    src={qualityImage}
                    alt="AI Product"
                    className="mobile-feature-image"
                  />
                </div>

                <div className="mobile-text-container">
                  <h3 className="mobile-feature-title">
                    AI Product <strong>Recommendation</strong> on your website
                  </h3>
                </div>
              </div>
              <div className="mobile-feature-card">
                <div className="mobile-image-container">
                  <img
                    src={rsaImage}
                    alt="Retail Assistant"
                    className="mobile-feature-image"
                  />
                </div>

                <div className="mobile-text-container">
                  <h3 className="mobile-feature-title">
                    Empower <strong>RSA</strong> with AI Assistant
                  </h3>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="feature">
                <img className="feature-image" src={qaImage} alt="AI Chat" />
                <div className="feature-text">
                  <span className="main-component-2-text">
                    AI <strong>Chat</strong> Experience
                  </span>
                </div>
              </div>
              <div className="feature">
                <img
                  className="feature-image"
                  src={qualityImage}
                  alt="AI Product"
                />
                <div className="feature-text">
                  <span className="main-component-2-text">
                    AI Product <strong>Recommendation</strong> on your website
                  </span>
                </div>
              </div>
              <div className="feature">
                <img
                  className="feature-image"
                  src={rsaImage}
                  alt="Retail Assistant"
                />
                <div className="feature-text">
                  <span className="main-component-2-text">
                    Empower <strong>RSA</strong> with AI Assistant
                  </span>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="model-screen-contact-us">
          <div className="contact-us">
            <span className="bullet-point">•</span>
            <p className="contact-link" onClick={handleContactClick}>
              Contact us
            </p>
          </div>
        </div>
      </div>
      <div className="chat-window-container">
        <ChatWindow
          messages={messages}
          handleSendMessage={handleSendMessage}
          handleSelectedTile={handleSelectedTile}
          handleUpload={handleUpload}
          loading={loading}
          loadingIndex={loadingIndex}
        />
      </div>
    </div>
  );
};

export default MainPage;
