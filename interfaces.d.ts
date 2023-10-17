interface IService {
  title: string;
  description: string;
  image?: string;
}

interface IAttribute {
  icon: React.ReactNode;
  text: string;
}

interface IAccomplishment {
  icon: React.ReactNode;
  title: string;
  subtext: string;
}

interface ITeamMember {
  image: string;
  name: string;
  role: string;
}

interface IPricingPlan {
  icon: React.ReactNode;
  title: string;
  price: number;
  services: string[];
}

interface ITestimonial {
  image: string;
  name: string;
  subtext: string;
  quote: string;
}