export interface Item {
  id: number;
  title: string;
  image: string;
  link: string;
}

export interface BestProps {
  items: Item[];
}

export interface MiddleProps {
  title?: string;
  description?: string;
  buttonText?: string;
  images?: string[];
  textColor?: string;
  backgroundColor?: string;
  buttonColor?: string;
}

export interface MenuItem {
  label: string;
  onClick: () => void;
}

export interface MenuProps {
  items: MenuItem[];
  backgroundColor?: string; // Pour personnaliser la couleur d'arrière-plan
}

export interface NewsletterProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  images?: string[]; // tableau d'images
  textColor?: string;
  backgroundColor?: string;
  buttonColor?: string;
}

export interface InfoSectionProps {
  paymentText?: string;
  deliveryText?: string;
  serviceText?: string;
  paymentIcon?: React.ReactNode;
  deliveryIcon?: React.ReactNode;
  serviceIcon?: React.ReactNode;
}

export interface Item {
  id: number;
  title: string;
  image: string;
  link: string;
}

export interface BestProps {
  items: Item[];
}
