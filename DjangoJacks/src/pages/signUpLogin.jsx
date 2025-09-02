import React, { useState, useEffect } from "react";

const AuthPage = () => {
  // Images for slider
  const images = [
    "/Images/collegehack.jpg",
    "/Images/campus.svg",
    "/Images/images.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLogin, setIsLogin] = useState(true); // toggle login/signup

  // Auto image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "90vh",
          width: "60%",
        }}
      >
        {/* LEFT SIDE - Image Slider */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            backgroundColor: "#f4f4f4",
          }}
        >
          <img
            src={images[currentIndex]}
            alt="Promo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              transition: "opacity 1s ease-in-out",
            }}
          />
        </div>

        {/* RIGHT SIDE - Welcome + Form */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "white",
            
          }}
        >
          <div
            style={{
              width: "350px",
              maxHeight: "85vh", // ✅ prevents overflow outside screen
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              overflowY: "auto", // ✅ scroll if content is too long
            }}
          >
            {/* ✅ Dynamic Welcome message */}
            <h1
              style={{
                textAlign: "center",
                marginBottom: "10px",
                color: "#444",
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              {isLogin ? "Welcome Back 👋" : "Join Us Today 🎉"}
            </h1>

            {/* Login / Sign Up heading */}
            <h2
              style={{
                textAlign: "center",
                marginBottom: "20px",
                color: "#333",
              }}
            >
              {isLogin ? "Login" : "Sign Up"}
            </h2>

            {/* COMMON FIELDS */}
            {!isLogin && (
              <>
                {/* Full Name */}
                <div style={{ marginBottom: "15px" }}>
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "8px",
                      border: "1px solid #ccc",
                    }}
                  />
                </div>
              </>
            )}
             <label style={{ fontWeight: "500", marginBottom: "5px", display: "block" }}>
    Select User Type
  </label>
  <select
    style={{
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "14px",
    }}
  >
    <option value="student">Student</option>
    <option value="Allumni">Allumni</option>
    <option value="admin">Admin</option>
  </select>

            <div style={{ marginBottom: "15px" }}>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter email"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            {/* Extra field only for signup */}
            {!isLogin && (
              <div style={{ marginBottom: "20px" }}>
                <label>Confirm Password</label>
                <input
                  type="password"
                  placeholder="Re-enter password"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
            )}

            {/* Button */}
            <button
              style={{
                width: "100%",
                padding: "12px",
                background: isLogin ? "#667eea" : "#ff758c",
                color: "white",
                fontWeight: "bold",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>

            {/* Toggle */}
            <p
              style={{
                textAlign: "center",
                marginTop: "15px",
                fontSize: "14px",
              }}
            >
              {isLogin ? (
                <>
                  Don’t have an account?{" "}
                  <span
                    style={{ color: "#667eea", cursor: "pointer" }}
                    onClick={() => setIsLogin(false)}
                  >
                    Sign Up
                  </span>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <span
                    style={{ color: "#ff758c", cursor: "pointer" }}
                    onClick={() => setIsLogin(true)}
                  >
                    Login
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
