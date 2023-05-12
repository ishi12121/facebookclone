import { useRef, useState } from "react";
import Header from "../../components/header";
import useclickOutside from "../../helpers/clickOutside";

export default function Home() {
  const [visible, setVisible] = useState(true);
  const el = useRef(null);
  useclickOutside(el, () => {
    setVisible(false);
  });
  return (
    <div>
      <Header />
    </div>
  );
}
