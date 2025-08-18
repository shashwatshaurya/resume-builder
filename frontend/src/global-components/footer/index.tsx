const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "var(--surface-secondary)",
        borderTopColor: "var(--border)"
      }}
      className="border-t transition-all duration-200"
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm" style={{ color: "var(--text-tertiary)" }}>
            © 2024 Resume Builder. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-sm transition-colors hover-primary"
              style={{ color: "var(--text-tertiary)" }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm transition-colors hover-primary"
              style={{ color: "var(--text-tertiary)" }}
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm transition-colors hover-primary"
              style={{ color: "var(--text-tertiary)" }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
