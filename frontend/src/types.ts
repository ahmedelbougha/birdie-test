export interface GeneralProps {
  backgroundColor?: string;
  color?: string;
  layout?: string;
}

export interface ThemeProps {
  theme: {
    colors: {
      header: GeneralProps;
      body: GeneralProps;
      footer: GeneralProps;
      card: GeneralProps;
    };
  };
}

export interface ImageProps {
  src: any;
  width?: string;
  height?: string;
  alt?: string;
}
