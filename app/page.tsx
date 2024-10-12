import Image from "next/image";
import Link from "next/link";
import Last from './mcomponents/1';
import Ok from './mcomponents/3';
import "./home.css";

function HomePage() {
  return (
    <div>
      <h1>Welcome to My Page</h1>
   
      <Last />
      <Ok />
    </div>
  );
}

export default HomePage;