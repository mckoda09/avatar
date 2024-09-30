import { colorVariants } from "../lib/avatars.ts";
import { cn } from "../lib/cn.ts";

export default function Home() {
  return (
    <main>
      <div class="p-5 text-xl text-center">
        avatar
      </div>

      <div class="p-5">
        <div class="relative">
          <div
            class={cn(
              "max-w-xl mx-auto bg-neutral-800 border border-neutral-700 p-5 rounded-lg",
              "grid sm:grid-cols-2 gap-3",
            )}
          >
            <div class="w-full aspect-square flex items-center justify-center text-neutral-500 bg-[#b7bdf8] rounded-lg">
            </div>
            <div class="space-y-5">
              <div class="grid grid-cols-7 sm:grid-cols-5 gap-1">
                {colorVariants.map((variant) => (
                  <div
                    style={"background-color: #" + variant}
                    class="rounded w-full aspect-square"
                  >
                    &nbsp;
                  </div>
                ))}
              </div>

              <div class="grid grid-cols-2 gap-3">
                <button class="bg-neutral-700 border border-neutral-600 rounded-lg py-2">
                  Random eyes
                </button>
                <button class="bg-neutral-700 border border-neutral-600 rounded-lg py-2">
                  Random mouth
                </button>
              </div>
            </div>
          </div>

          <div class="absolute left-0 top-0 w-full h-full ">
            <div class="text-center backdrop-blur-xl backdrop-brightness-50 p-5 rounded-lg max-w-xl mx-auto h-full flex items-center justify-center">
              <div>
                This demo project violated CC 4.0 license of
                <br />
                <a
                  href="https://www.figma.com/community/file/968125295144990435"
                  class="text-sky-500 md:hover:underline"
                >
                  Fun Emoji Set
                </a>{" "}
                by{" "}
                <a
                  href="https://www.instagram.com/davedirect3/"
                  class="text-sky-500 md:hover:underline"
                >
                  Davis Uche
                </a>.
                <br />
                Now it is deprecated.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="p-5 text-sm text-neutral-500 text-center">
        <div>
          Made with 💜 by{" "}
          <a href="https://mckoda09.ru" class="underline">mckoda09</a>
        </div>
        <div>
          <a href="https://github.com/mckoda09/avatar" class="underline">
            Source Code
          </a>
        </div>
      </div>
    </main>
  );
}
