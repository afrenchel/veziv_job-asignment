import React from "react";

import WorkerImg from "../assets/worker_img.png";
import { worker } from "../data/worker";
import { GoLocation } from "react-icons/go";
import { GiSandsOfTime } from "react-icons/gi";
import { BsSendFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

import Button from "./Button";

const WorkerSection = () => {
  const {
    name,
    username,
    motto,
    from,
    memberSince,
    avgResponseTime,
    lastDelivery,
  } = worker;

  return (
    <aside className="worker-section">
      <div className="worker-card">
        <div className="worker-card__img">
          <img src={WorkerImg} alt="digital-worker" />
        </div>
        <div className="worker-card__info">
          <h3>{name}</h3>
          <h4>
            <span>@</span>
            {username}
          </h4>
          <p className="short-desc">{motto}</p>
          <div className="worker-card__ctas">
            <Button title={"Contact Me"} additionalStyle={"bg-primary"} />
            <Button title={"Get a Quote"} />
          </div>
        </div>
        <hr />
      </div>
      <ul className="worker-card__other">
        <li>
          <span>
            <GoLocation /> From
          </span>
          <span>{from}</span>
        </li>
        <li>
          <span>
            <FaUserAlt /> Member since
          </span>
          <span>{memberSince}</span>
        </li>
        <li>
          <span>
            <GiSandsOfTime /> Avg.Response{" "}
          </span>
          <span>{avgResponseTime}</span>
        </li>
        <li>
          <span>
            <BsSendFill />
            Last Delivery
          </span>
          <span>{lastDelivery}</span>
        </li>
      </ul>
    </aside>
  );
};

export default WorkerSection;
