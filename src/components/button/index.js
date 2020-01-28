import gsap from "gsap"

export default (props) => {
  const animate = () => {
    const tl = gsap.timeline({ onComplete: () => props.action() })
    tl.to('#button', { duration: 0.1, scale: 0.85 })
      .to('#button', { duration: 0.1, scale: 1 })
    if (props.animation) {
      props.animation()
    }
  }

  return (
    <button
      id="button"
      type={props.type}
      onClick={animate}
    >
      {props.children}
      <style jsx>{`
        #button {
          padding: 10px 25px;
          background-image: linear-gradient(-135deg, #2AF598, #08B3E5);
          color: #fff;
          outline: none;
          box-shadow: 0 1px 3px #999;
          border: none;
          border-radius: 30px;
        }
      `}</style>
    </button>
  )
}