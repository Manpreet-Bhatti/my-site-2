import Logo from "./logo";
import Link from "next/link";
import {
  Container,
  Box,
  Link as L,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ThemeToggleButton } from "./theme-toggle-button";
import { IoLogoGithub } from "react-icons/io5";
import theme from "../lib/theme";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue(
    theme.colors.text,
    theme.colors.darkText
  );
  return (
    <Link href={href} passHref scroll={false}>
      <L
        p={2}
        _hover={{
          color: theme.colors.redLight,
        }}
        color={active ? theme.colors.redLight : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </L>
    </Link>
  );
};

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Projects", href: "/projects" },
  { name: "Source", href: "https://github.com/Manpreet-Bhatti/my-site-2" },
];

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justifyContent={"space-between"}
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/work" path={path}>
            Work
          </LinkItem>
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/Manpreet-Bhatti/my-site-2"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>
        <Flex alignItems="center">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu id="navbar-menu" autoSelect={false} isLazy>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                aria-label="Options"
                variant="ghost"
                _hover={{
                  bg: useColorModeValue(
                    theme.colors.hoverLightRedButton,
                    theme.colors.hoverDarkRedButton
                  ),
                }}
                _active={{
                  bg: useColorModeValue(
                    theme.colors.activeLightRedButton,
                    theme.colors.activeDakrRedButton
                  ),
                }}
              />
              <MenuList
                bg={useColorModeValue("#ffffff", "#1a1a1a")}
                borderColor={useColorModeValue("#f4f4f4", "whiteAlpha.200")}
              >
                {menuItems.map((item, i) => {
                  return (
                    <Link href={item.href} passHref key={i}>
                      <MenuItem
                        as={L}
                        _hover={{
                          // eslint-disable-next-line react-hooks/rules-of-hooks
                          bg: useColorModeValue(
                            theme.colors.hoverLightRedButton,
                            theme.colors.hoverDarkRedButton
                          ),
                          textDecoration: "none",
                        }}
                        isExternal={item.name === "Source"}
                      >
                        {item.name}
                      </MenuItem>
                    </Link>
                  );
                })}
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
