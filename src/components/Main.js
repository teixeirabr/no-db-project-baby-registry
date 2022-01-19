import React from "react";
import Gift from "./Gift";
import AddGift from "./AddGift";

export default function Main(props) {
  console.log("props123", props);
  return (
    <div className="post-it">
      <AddGift addGift={props.addGift} />
      <ul>
        {props.posts.map((e) => {
          return (
            <Gift
              key={e.id}
              name={e.name}
              email={e.email}
              gifts={e.gifts}
              delete={props.deleteGift}
              editGifts={props.editGifts}
              id={e.id}
            />
          );
        })}
      </ul>
    </div>
  );
}
