import { useState } from "react";
import styled from "@emotion/styled";
import theme from "../lib/theme";

const hideLink = (link) => {
  const [protocol] = link.split(":");
  return `${protocol}:unscrapable`;
};

const Link = styled.a`
  color: ${theme.colors.redLight};
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  text-decoration: none;
  transition: currentColor 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-size 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${theme.colors.hoverRedLight};
    background-size: 100% 2px;
  }

  &:active {
    color: ${theme.colors.activeRedLight};
  }
`;

export default function RedLink({ to: _to, mask, ...props }) {
  const [to, setTo] = useState(mask ? hideLink(_to) : _to);
  const hover = to !== _to ? () => setTo(_to) : undefined;
  const external = to.match(/^(http|mailto|https):/g);
  const linkProps = external
    ? {
        rel: "noreferrer noopener",
        target: "_blank",
        href: to,
      }
    : {
        to,
      };

  return <Link onMouseOver={hover} onFocus={hover} {...linkProps} {...props} />;
}
