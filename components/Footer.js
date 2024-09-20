export default function Footer() {
    return (
      <div>
        <footer className="dark:bg-neutral-800 dark:text-white text-sm leading-7 text-center pt-6 pb-12 px-6 space-y-3">
          <p>
            &copy; {new Date().getFullYear()}
            <b> Theophilus O.</b> | All Rights Reserved.
          </p>

          <p>
            Source code is available at{" "}
            <a href="https://github.com/tedph-cyber/ted-pholio" target="_blank">
              github.com/tedph-cyber/ted-pholio
            </a>
          </p>

          <p>
            If you for some reason want to support me & what I work on, you can
            sponsor me via{" "}
            <a href="https://wa.me/+23409036011196" target="_blank">
              Whatsapp
            </a>
          </p>
        </footer>
      </div>
    );
}