import Avatar from "../islands/avatar.tsx";

export default function Home() {
  return (
    <main>
      <div class="p-5 text-xl text-center">
        avatar
      </div>

      <Avatar />

      <div class="p-5 text-sm text-neutral-500 text-center">
        <div>
          Made with 💜 by{" "}
          <a href="https://mckoda09.ru" class="underline">mckoda09</a>
        </div>
        <div>
          <a href="https://github.com/mckoda09/avatar" class="underline">Source Code</a>
        </div>
      </div>
    </main>
  );
}
