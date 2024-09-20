export default function Footer() {
    return (
      <div>
        <footer class="dark:bg-neutral-800 dark:text-white text-sm leading-7 text-center pt-6 pb-12 px-6 space-y-3">
          <p>
            &copy; {new Date().getFullYear()}
            <b> Theophilus O.</b> | All Rights Reserved.
          </p>

          <p>
            Source code is available at{" "}
            <a href="https://" target="_blank">
              github.com/tedpholio
            </a>
          </p>

          <p>
            If you for some reason want to support me & what I work on, you can
            sponsor me on{" "}
            <a href="https://" target="_blank">
              Github
            </a>
          </p>
        </footer>
      </div>
    );
}