import { useState } from "preact/hooks";
import { cn } from "../lib/cn.ts";
import {
  colorVariants,
  genRandomAvatar,
  getAvatarUrl,
} from "../lib/avatars.ts";
import { IS_BROWSER } from "$fresh/src/runtime/utils.ts";
import { eyesVariants } from "../lib/avatars.ts";
import { mouthsVariants } from "../lib/avatars.ts";

export default function Avatar() {
  const avatar = genRandomAvatar();
  const [color, setcolor] = useState(avatar.color);
  const [eyes, seteyes] = useState(avatar.eyes);
  const [mouth, setmouth] = useState(avatar.mouth);

  return (
    <div class="p-5">
      <div
        class={cn(
          "max-w-xl mx-auto bg-neutral-800 border border-neutral-700 p-5 rounded-lg",
          "grid sm:grid-cols-2 gap-3",
        )}
      >
        {IS_BROWSER
          ? (
            <img
              src={getAvatarUrl({ color, eyes, mouth })}
              class="rounded-xl"
              alt="Avatar"
            />
          )
          : (
            <div class="w-full aspect-square flex items-center justify-center text-neutral-500">
              Loading...
            </div>
          )}
        <div class="space-y-5">
          <div class="grid grid-cols-7 sm:grid-cols-5 gap-1">
            {colorVariants.map((variant) => (
              <div
                style={"background-color: #" + variant}
                class="rounded w-full aspect-square"
                onClick={() => {
                  setcolor(variant);
                }}
              >
                &nbsp;
              </div>
            ))}
          </div>

          <div class="grid grid-cols-2 gap-3">
            <button
              class="bg-neutral-700 border border-neutral-600 rounded-lg py-2"
              onClick={() =>
                seteyes(
                  eyesVariants[
                    Math.floor(Math.random() * eyesVariants.length)
                  ],
                )}
            >
              Random eyes
            </button>
            <button
              class="bg-neutral-700 border border-neutral-600 rounded-lg py-2"
              onClick={() =>
                setmouth(
                  mouthsVariants[
                    Math.floor(Math.random() * mouthsVariants.length)
                  ],
                )}
            >
              Random mouth
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
