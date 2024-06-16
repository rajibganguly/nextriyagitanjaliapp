import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import react, { useState, useEffect, useRef } from "react";
import Login from "../components/login";
import Register from "../components/register";
import Footer from "../components/Footer";
import logo from "./../public/images/logo.png";

import { useRouter } from "next/router";

const IndexPage = () => {
  const router = useRouter();

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <Image src={logo} width={128} height={74} alt="Riya gitanjali Logo" />
        </div>
        <div className="container-fluid">
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="row mb-3"
              style={{ width: "80%", marginTop: "2%" }}
            >
              <figure>
              <img src="https://image.slidesharecdn.com/geetanjali-200724202750/75/GEETANJALI-BY-RABINDRANATH-TAGORE-1-2048.jpg"
              style={{width: "100%", padding: "10px 0"}}
              alt="riyaGitanjali"
              />
              </figure>
              <p>
                <strong>Rabindranath Tagore</strong>, the revered poet and Nobel laureate, was
                also a masterful storyteller. One of his enchanting stories is
                "The Kabuliwala," a poignant tale of friendship and separation.
              </p>
              <p>
                In the bustling streets of early 20th century Kolkata, a little
                girl named Mini lived with her father, a writer. Mini was a
                vivacious child, always curious and brimming with questions. One
                day, while peering out of her window, she spotted a tall,
                turbaned figure making his way through the crowd. This was
                Rahmat, the Kabuliwala, a peddler from Afghanistan who roamed
                the streets selling dry fruits and spices. Mini's innocent
                curiosity drew her to Rahmat, and soon, an unlikely friendship
                blossomed between the little girl and the burly Afghan. Rahmat,
                with his gruff exterior, had a soft spot for children, reminded
                of his own daughter back in Kabul. He would bring Mini almonds,
                raisins, and stories from his faraway land, and in return, Mini
                would entertain him with her endless chatter.
              </p>
              <p>
                Mini's father observed this friendship with a mix of amusement
                and affection. He saw in Rahmat a gentle giant who, despite the
                harshness of his trade, harbored a heart full of love and
                longing for his homeland and family. One day, Rahmat arrived at
                Mini's house in distress. He had been involved in a skirmish and
                was arrested, accused of assaulting a customer who had tried to
                cheat him. As he was led away by the police, he handed Mini's
                father a small bundle to keep for his daughter, promising he
                would return for it someday. Years passed. Mini grew up, the
                memory of her Kabuliwala fading with time. On the day of her
                wedding, Rahmat returned, now a gray-haired, weary man. He
                hesitated at the door, his eyes searching for the little girl he
                once knew. Mini's father recognized him and welcomed him inside.
                Rahmat's eyes filled with tears as he saw the grown-up Mini in
                her bridal attire, no longer the child who used to sit on his
                lap. He handed her the bundle he had entrusted years ago. Inside
                were dry fruits and a small handprint of his daughter, a relic
                from his distant home. Moved by his enduring love and loyalty,
                Mini's father gave Rahmat some money to return to his homeland.
                As Rahmat left, there was a silent acknowledgment of the
                profound connection that transcended time and distance—a
                reminder of the enduring power of friendship and love. "The
                Kabuliwala" is a testament to Tagore's ability to capture the
                depth of human emotions and relationships, weaving a narrative
                that resonates across cultures and generations.
              </p>
              <hr />
              <p>Login now!</p>
              <div>
                <button
                  className="btn btn-light mr-2"
                  onClick={() => router.push("/login")}
                >
                  Login
                </button>
                <button
                  className="btn btn-dark"
                  onClick={() => router.push("/register")}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
