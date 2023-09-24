import githubLogo from '../assets/github.svg';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center mt-10">
      <div>Made with ❤️ by Kshitiz</div>

      <a
        href="https://github.com/KKshitiz/life-visualizer"
        target="_blank"
        className="flex gap-3"
      >
        GitHub
        <img src={githubLogo} alt="Github icon" />
      </a>
    </footer>
  );
};
export default Footer;
