export const capitalizeEachWord = (word) =>
    word.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
