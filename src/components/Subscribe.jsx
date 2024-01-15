export default function Subscribe() {
  return (
    <div className="container max-[768px]:flex max-[768px]:justify-center ">
      <div className="flex flex-col items-center gap-2 bg-[#5959D9] p-[50px] text-white border rounded-[20px] max-[768px]:w-[650px] max-[480px]:w-[400px] max-[480px]:flex ">
        {/* Static text */}
        <span>Yes!</span>

        {/* Paragraph with subscription-related information */}
        <p>
          Send me exclusive offers, unique gift ideas, and personalized tips for
          shopping and selling on Commerce.
        </p>

        {/* Subscription form */}
        <div className="flex flex-row border rounded-[20px] bg-white py-[10px] px-[15px] ">
          {/* Email input field */}
          <input
            type="email"
            placeholder="Enter your email..."
            className="w-[400px] max-[480px]:w-[200px]  outline-none text-black"
          />

          {/* Subscription button and right arrow icon */}
          <div className="flex flex-row items-center bg-secondary text-white p-2 gap-1 border rounded-[16px]">
            <button>Subscribe</button>
          </div>
        </div>

        {/* Additional information */}
        <span className="text-white">First order only. You’re ready?</span>
      </div>
    </div>
  );
}
