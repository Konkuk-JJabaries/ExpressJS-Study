import { scrapComponent } from './scrap.component';

export const index = (keyword: string) => {
  return scrapComponent(keyword)
    .then(value => value)
    .catch(err => {
      throw new Error(err);
    });
};