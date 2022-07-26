import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./sharecampaign.module.css";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { trustIcon } from "../../../public/images";
import { FaFacebook } from "react-icons/fa";
const ShareCampaign = ({ open, onClose, onConnect }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);
  if (isBrowser) {
    return ReactDOM.createPortal(
      <form className={open ? styles.active : styles.ShareCampaignContainer}>
        <div className={open ? styles.open : styles.modalContainer}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>Share this campaign</h2>
              <button
                type="button"
                className={styles.close}
                onClick={() => onClose()}
              >
                <AiOutlineClose size={25} />
              </button>
            </div>
            <p className={styles.modalBodyParagraph}>
              Thanks for helping broadcast this campaign.
            </p>
            <div className={styles.modalBody}>
              <div className={styles.inputContainer}>
                <span>www.fintrust.com/endsars-campaign</span>
                <span></span>
              </div>
              <div className={styles.text}>Share on;</div>
              <div className={styles.social}>
                <div>
                  <span>
                    <FaFacebook size={30} />
                  </span>
                  <span>Facebook</span>
                </div>
                <div>
                  <span>
                    <FaFacebook size={30} />
                  </span>

                  <span>Facebook</span>
                </div>
                <div>
                  <span>
                    <FaFacebook size={30} />
                  </span>

                  <span>Facebook</span>
                </div>
                <div>
                  <span>
                    <FaFacebook size={30} />
                  </span>

                  <span>Facebook</span>
                </div>
                <div>
                  <span>
                    <FaFacebook size={30} />
                  </span>

                  <span>Facebook</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export { ShareCampaign };
