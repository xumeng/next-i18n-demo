import "server-only";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  cn: () => import("./dictionaries/cn.json").then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();
