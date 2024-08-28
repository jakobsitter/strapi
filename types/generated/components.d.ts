import type { Schema, Attribute } from '@strapi/strapi';

export interface TagsTags extends Schema.Component {
  collectionName: 'components_tags_tags';
  info: {
    displayName: 'tags';
    icon: 'bulletList';
  };
  attributes: {
    tag: Attribute.String;
  };
}

export interface Media2Media2 extends Schema.Component {
  collectionName: 'components_media2_media2s';
  info: {
    displayName: 'media2';
    icon: 'play';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'tags.tags': TagsTags;
      'media2.media2': Media2Media2;
    }
  }
}
