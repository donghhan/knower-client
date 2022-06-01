import { Helmet } from "react-helmet-async";

interface IPageTitle {
  title: string;
}

export default function PageTitle({ title }: IPageTitle) {
  return (
    <Helmet>
      <title>{title} | Knower</title>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;700&display=swap');
      </style>
    </Helmet>
  );
}
