import Link from "next/link";
import { FC } from "react";
import Container from "../Layout/Container";

interface Props {}

const Navigation: FC<Props> = (props): JSX.Element => {
  return (
    <div className="border-b sticky top-0 right-0 left-0 bg-white bg-opacity-50 backdrop-blur-md">
      <Container>
        <div className="py-5 flex items-center justify-between">
          <Link className="text-lg font-bold" href="/">
            Explorer{" "}
          </Link>
          <nav>
            <ul className="flex items-center gap-4 text-neutral-600">
              <li>
                <Link href="/cities">Cities</Link>
              </li>

              <li>
                <Link href="/experiences">Experiences</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
