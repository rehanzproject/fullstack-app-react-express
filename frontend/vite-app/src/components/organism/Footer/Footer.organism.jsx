import SocialMediaIcon from "../../atom/icons/SocialMediaIcon";

function Footer() {
  return (
    <div>
      <div className="bg-success-10 flex flex-col items-center justify-center text-white py-5">
        <h1 className="text-4xl ">Diverse Food</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit posuere
          libero.{" "}
        </p>
        <SocialMediaIcon />
        <div className="grid grid-cols-3 gap-4">
            <p>Quick Links</p>
            <p>Pages</p>
            <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
