import styled from "styled-components"

const PostBlockStyles = styled.div`
  padding-top: 3rem !important;
  .h-post-box {
    position: relative;
    padding-left: 200px;
    min-height: 170px;
    margin-bottom: 3rem !important;
  }
  .h-post-content .post-title {
    color: #000 !important;
    transition: 0.5s all ease;
    text-decoration: none;
    margin-bottom: 0;
  }
  .h-post-content .post-title:hover{
    text-decoration:underline;
  }
  .h-post-content h3 {
    color: #000000;
    font-size: 22px;
    font-weight:700;
    letter-spacing: -0.45px;
    line-height: 22px;
    margin: 0;
  }
  .h-post-content p {
    color: #000000;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    font-family: "Roboto", sans-serif;
    margin: 0;
    margin-top: 10px;
  }
  .h-post-content .more-btn {
    color: #000000;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.89px;
    line-height: 18px;
    text-transform: uppercase;
    text-decoration: none;
    display: block;
    margin-top: 27px;
  }
  .h-post-content .more-btn span {
    color: #4aa077;
    transition: 0.5s all ease;
  }
  .h-post-content a.more-btn:hover span {
    margin-left: 10px;
  }
  .post-image {
    width: 180px;
    position: absolute;
    left: 0;
  }
  @media only screen and (max-width: 767px) {
    .h-post-box {
      position: static;
      padding: 0;
      text-align: center;
    }
    .post-image {
      width: auto;
      position: static;
      left: auto;
    }
    .h-post-content h3 {
      font-size: 28px;
      line-height: 28px;
      margin-top: 15px;
    }
    .h-post-content a.more-btn {
      text-align: right;
    }
  }
`
export default PostBlockStyles


