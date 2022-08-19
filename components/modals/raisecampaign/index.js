import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./raisecampaign.module.css";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { trustIcon } from "../../../public/images";
import { FaFacebook } from "react-icons/fa";
import { CampaignDetails } from "./form1";
import { CampaignTransactionsDetails } from "./form2";
const RaiseCampaign = ({ open, onClose, onConnect, setOpenSuccessForm }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [campaignTitle, setCampaignTitle] = useState("");
  const [campaignDescription, setCampaignDescription] = useState("");
  const [showForm, setShowForm] = useState("detailsForm");
  const [campaignAmount, setCampaignAmount] = useState("");
  const [file, setFiles] = useState([]);
  const [ArraySignatories, setArraySignatories] = useState([]);
  const handleReset = () => {
    setCampaignTitle("");
    setCampaignDescription("");
    setCampaignAmount("");
    setArraySignatories([]);
    setFiles([]);
  };
  useEffect(() => {
    setIsBrowser(true);
  }, []);
  if (isBrowser) {
    return ReactDOM.createPortal(
      <div className={open ? styles.active : styles.RaiseCampaignContainer}>
        <div className={open ? styles.open : styles.modalContainer}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>
                {showForm !== "detailsForm"
                  ? "Transaction Details"
                  : "Create a new campaign"}
              </h2>
              <button
                type="button"
                className={styles.close}
                onClick={() => {
                  setOpenSuccessForm(false);
                  setShowForm("detailsForm");
                  onClose();
                }}
              >
                <AiOutlineClose size={25} />
              </button>
            </div>
            <p className={styles.modalBodyParagraph}>
              {showForm !== "detailsForm"
                ? "Please confirm all info before proceeding to avoid loss of funds."
                : "Open a campaign in just a few step and get people to donate seemlessly."}
            </p>
            <div className={styles.modalBody}>
              <CampaignDetails
                showForm={showForm}
                setShowForm={setShowForm}
                campaignTitle={campaignTitle}
                setCampaignTitle={setCampaignTitle}
                campaignDescription={campaignDescription}
                setCampaignDescription={setCampaignDescription}
                file={file}
                setFiles={setFiles}
              />
              <CampaignTransactionsDetails
                showForm={showForm}
                onClose={onClose}
                setShowForm={setShowForm}
                setShowSuccessForm={setOpenSuccessForm}
                campaignAmount={campaignAmount}
                setCampaignAmount={setCampaignAmount}
                ArraySignatories={ArraySignatories}
                setArraySignatories={setArraySignatories}
                reset={() => handleReset()}
              />
            </div>
          </div>
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export { RaiseCampaign };
