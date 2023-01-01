export interface CareRecipient {
  recipientId: string;
}

export interface Event {
  id: string;
  care_recipient_id: string;
  event_type: string;
  timestamp: string;
  payload: {
    [key: string]: unknown;
  };
}

export interface GeneralProps {
  backgroundColor?: string;
  color?: string;
  layout?: string;
}

export interface ImageProps {
  src: any;
  width?: string;
  height?: string;
  alt?: string;
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
