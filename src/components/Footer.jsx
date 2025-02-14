const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center bg-base-200 p-10">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold">Gadget Mart</h2>
        <p className="text-lg font-medium text-gray-600">
          Combined Quality with sustainability{" "}
        </p>
      </div>
      <div className="footer sm:footer-horizontal  text-base-content  flex justify-around">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
