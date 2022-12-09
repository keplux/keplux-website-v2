import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaDesktop } from '@react-icons/all-files/fa/FaDesktop';
import { HiOutlinePuzzle } from '@react-icons/all-files/hi/HiOutlinePuzzle';
import { MdDevices } from '@react-icons/all-files/md/MdDevices';
import Image from 'next/image';
import webIllustration from '../public/illustrations/web-development.png';
import paymentIllustration from '../public/illustrations/payments.png';
import logo from '../public/keplux-logo-full-dark.png';
import { FeatureCardIcon, SplitSection } from '../src/components/sections';
import AngleDivider from '../public/dividers/angle.svg';
import { FaCheck } from '@react-icons/all-files/fa/FaCheck';

const Home = () => {
  return (
    <Box py={16}>
      {/* Main header container */}
      <Container
        as={Stack}
        alignItems="center"
        position="relative"
        zIndex={1}
        pb={28}
        bg="gray.50"
        w="full"
        maxW="100vw"
      >
        {/* Logo */}
        <Box position="relative" w="full" h={32}>
          <Image
            src={logo}
            alt="Keplux Development logo"
            fill
            style={{ objectFit: 'contain' }}
          />
        </Box>

        {/* CTA section */}
        <SplitSection
          containerStyle={{
            maxW: '8xl',
            w: 'full',
            gap: { base: 0, lg: 16 },
            mt: 16,
          }}
        >
          <SplitSection.LeftContent>
            <Box position="relative" w="full" h="full" minH={72}>
              <Image
                src={webIllustration}
                alt="A team building a website."
                fill
                style={{ objectFit: 'contain' }}
              />
            </Box>
          </SplitSection.LeftContent>
          <SplitSection.RightContent>
            <Box py={28}>
              <Heading as="h1" fontWeight="black">
                We&apos;re not like other web development companies.
              </Heading>
              <Stack mt={6} color="gray.600">
                <Text>
                  Our websites are 100% custom and powered by React, a
                  technology created and maintained by Meta (formerly Facebook)
                  and used by companies such as Netflix, Instagram, and PayPal.
                </Text>
                <Text>
                  Website builders like WordPress and Squarespace tend to come
                  with a lot of unnecessary overhead that slows websites down,
                  and they can also be buggy and more vulnerable to security
                  threats.
                </Text>
              </Stack>
              <Button as={Link} href="/contact" colorScheme="brand" mt={8}>
                Contact Us
              </Button>
            </Box>
          </SplitSection.RightContent>
        </SplitSection>
      </Container>

      {/* Conversions card section */}
      <Box position="relative" bg="brand.600" pb={40}>
        <AngleDivider
          style={{ width: '100%', filter: 'drop-shadow(5px 0 5px #000000AA)' }}
        />
        <Container position="relative" zIndex={2} mt={-64}>
          <Box
            zIndex={2}
            mx="auto"
            maxW="xl"
            w="full"
            bg="brand.100"
            p={{ base: 4, md: 8 }}
            rounded="lg"
            shadow="lg"
          >
            <Heading as="h2">
              Don&apos;t miss conversions because of a slow website.
            </Heading>
            <Text>
              With our React-based websites, visitors will be less likely to
              click away because load times are much faster than WordPress.
            </Text>
            <Text
              mt={4}
              fontSize="xl"
              fontWeight="semibold"
              textTransform="uppercase"
              color="brand.600"
            >
              Did you know?
            </Text>
            <Text>
              Your conversion rate could drop 4.42% every second within the
              first five seconds of load time?
            </Text>
            <Text color="brand.400" fontWeight="semibold" fontSize="xs" mt={2}>
              Source:{' '}
              <Link
                href="https://blog.hubspot.com/marketing/page-load-time-conversion-rates"
                target="_blank"
                rel="noreferrer"
              >
                HubSpot
              </Link>
            </Text>
          </Box>
        </Container>
        <Stack
          alignItems="center"
          maxW="2xl"
          w="full"
          mx="auto"
          mt={32}
          color="brand.300"
        >
          <Heading
            as="h2"
            textTransform="uppercase"
            color="brand.300"
            textAlign="center"
          >
            <chakra.span fontWeight="black" color="white">
              What
            </chakra.span>{' '}
            we do
          </Heading>
          <Text textAlign="center">
            Whether you need a website to showcase your portfolio, to represent
            and generate leads for your business, run an e-commerce store, or
            run a blog, we ensure your visitors have the best experience
            possible.
          </Text>
        </Stack>
      </Box>

      <Box position="relative" mt={-24}>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          w="full"
          gap={16}
          maxW="6xl"
          mx="auto"
          placeItems="center"
          alignItems="stretch"
        >
          <FeatureCardIcon
            icon={FaDesktop}
            heading="Web Design and Development"
            description="We have custom-built templates or can design you a site from
              scratch."
          />
          <FeatureCardIcon
            icon={MdDevices}
            heading="Responsiveness, SEO, & Accessibility"
            description="Your website will adapt to any screen size and look great, rank
              high on search engines, and be accessible to everyone regardless
              of disability."
          />
          <FeatureCardIcon
            icon={HiOutlinePuzzle}
            heading="Business Solutions"
            description="No matter how you need, or want, to manage your content, we can
              build a custom solution that fits your business needs."
          />
        </SimpleGrid>
      </Box>

      <Container w="full" maxW="8xl">
        <SplitSection containerStyle={{ mt: 28, mx: 'auto' }}>
          <SplitSection.LeftContent>
            <Heading as="h2">
              Get a website for{' '}
              <chakra.span color="brand.500" fontWeight="black">
                $0
              </chakra.span>{' '}
              down and{' '}
              <chakra.span color="brand.500" fontWeight="black">
                $150
              </chakra.span>{' '}
              per month.
            </Heading>
            <Text>
              If your business just needs an online presence, we offer a simple
              package that gives you everything you need to get online and stay
              online. By providing your own content, this package keeps your
              costs low. However, addons are available if you need them.
            </Text>
            <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8} mt={8}>
              <Flex gap={3}>
                <Icon as={FaCheck} mt={-0.5} color="green.500" w={6} h={6} />
                <Stack spacing={1}>
                  <Heading
                    as="h3"
                    fontSize="lg"
                    fontWeight="black"
                    textTransform="uppercase"
                  >
                    Website template
                  </Heading>
                  <Text fontSize="sm">
                    Choose one of our beautiful, high performance templates and
                    provide content for up to 5 pages.
                  </Text>
                </Stack>
              </Flex>
              <Flex gap={3}>
                <Icon as={FaCheck} mt={-0.5} color="green.500" w={6} h={6} />
                <Stack spacing={1}>
                  <Heading
                    as="h3"
                    fontSize="lg"
                    fontWeight="black"
                    textTransform="uppercase"
                  >
                    Responsive design
                  </Heading>
                  <Text fontSize="sm">
                    We make sure your site looks great on mobile devices,
                    desktop devices, and everything in between.
                  </Text>
                </Stack>
              </Flex>
              <Flex gap={3}>
                <Icon as={FaCheck} mt={-0.5} color="green.500" w={6} h={6} />
                <Stack spacing={1}>
                  <Heading
                    as="h3"
                    fontSize="lg"
                    fontWeight="black"
                    textTransform="uppercase"
                  >
                    Unlimited content updates
                  </Heading>
                  <Text fontSize="sm">
                    Need to make a change to your content? Let us know and
                    we&apos;ll take care of it the same day! Larger updates may
                    take up to 24 hours.
                  </Text>
                </Stack>
              </Flex>
              <Flex gap={3}>
                <Icon as={FaCheck} mt={-0.5} color="green.500" w={6} h={6} />
                <Stack spacing={1}>
                  <Heading
                    as="h3"
                    fontSize="lg"
                    fontWeight="black"
                    textTransform="uppercase"
                  >
                    SEO and accessibility
                  </Heading>
                  <Text fontSize="sm">
                    Help your page rank high in search engine results with
                    crucial SEO and accessibility implementations.
                  </Text>
                </Stack>
              </Flex>
              <Flex gap={3}>
                <Icon as={FaCheck} mt={-0.5} color="green.500" w={6} h={6} />
                <Stack spacing={1}>
                  <Heading
                    as="h3"
                    fontSize="lg"
                    fontWeight="black"
                    textTransform="uppercase"
                  >
                    Hosting
                  </Heading>
                  <Text fontSize="sm">
                    Free hosting with one of our hosting providers. Includes a
                    free SSL certificate generated with Let&apos;s Encrypt.
                  </Text>
                </Stack>
              </Flex>
              <Flex gap={3}>
                <Icon as={FaCheck} mt={-0.5} color="green.500" w={6} h={6} />
                <Stack spacing={1}>
                  <Heading
                    as="h3"
                    fontSize="lg"
                    fontWeight="black"
                    textTransform="uppercase"
                  >
                    Google Maps
                  </Heading>
                  <Text fontSize="sm">
                    Show your visitors where your business is located with an
                    interactive map provided byy Google Maps.
                  </Text>
                </Stack>
              </Flex>
              <Flex gap={3}>
                <Icon as={FaCheck} mt={-0.5} color="green.500" w={6} h={6} />
                <Stack spacing={1}>
                  <Heading
                    as="h3"
                    fontSize="lg"
                    fontWeight="black"
                    textTransform="uppercase"
                  >
                    24/7 support and maintenance
                  </Heading>
                  <Text fontSize="sm">
                    We&apos;re available at any time to provide service. We will
                    also perform maintenance when necessary, such as patching
                    security vulnerabilities.
                  </Text>
                </Stack>
              </Flex>
              <Flex gap={3}>
                <Icon as={FaCheck} mt={-0.5} color="green.500" w={6} h={6} />
                <Stack spacing={1}>
                  <Heading
                    as="h3"
                    fontSize="lg"
                    fontWeight="black"
                    textTransform="uppercase"
                  >
                    Custom contact form
                  </Heading>
                  <Text fontSize="sm">
                    Let users provide your business with the information you
                    need. We&apos;ll make sure it gets to your inbox.
                  </Text>
                </Stack>
              </Flex>
            </SimpleGrid>
          </SplitSection.LeftContent>
          <SplitSection.RightContent>
            <Box position="relative" w="full" h="full" minH={72}>
              <Image
                src={paymentIllustration}
                alt="A team building a website."
                fill
                style={{ objectFit: 'contain' }}
              />
            </Box>
          </SplitSection.RightContent>
        </SplitSection>
      </Container>
    </Box>
  );
};

export default Home;
