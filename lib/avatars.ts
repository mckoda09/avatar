export const colorVariants = [
  "f4dbd6",
  "f0c6c6",
  "f5bde6",
  "c6a0f6",
  "ed8796",
  "ee99a0",
  "f5a97f",
  "eed49f",
  "a6da95",
  "8bd5ca",
  "91d7e3",
  "7dc4e4",
  "8aadf4",
  "b7bdf8",
] as const;

export const eyesVariants = [
  "closed",
  "closed2",
  "cute",
  "glasses",
  "pissed",
  "plain",
  "sad",
  "shades",
  "sleepClose",
  "wink",
  "wink2",
] as const;
export const mouthsVariants = [
  "faceMask",
  "lilSmile",
  "plain",
  "smileTeeth",
  "tongueOut",
  "wideSmile",
] as const;

interface Avatar {
  color: typeof colorVariants[number];
  eyes: typeof eyesVariants[number];
  mouth: typeof mouthsVariants[number];
}

export const genRandomAvatar = () => {
  const color = colorVariants[Math.floor(Math.random() * colorVariants.length)];
  const eyes = eyesVariants[Math.floor(Math.random() * eyesVariants.length)];
  const mouth =
    mouthsVariants[Math.floor(Math.random() * mouthsVariants.length)];
  return { color, eyes, mouth } as Avatar;
};

export const getAvatarUrl = (avatar: Avatar) => {
  return `https://api.dicebear.com/9.x/fun-emoji/svg?backgroundColor=${avatar.color}&eyes=${avatar.eyes}&mouth=${avatar.mouth}`;
};
