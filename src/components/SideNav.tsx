import React from "react";
import { Category } from "../types";
import { Box, Heading, Link, SkeletonText, VStack } from "@chakra-ui/react";

type Props = {
  categories: Category[];
  loading: boolean;
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
};

const selectedProps = {
  bgColor: "blue.400",
  color: "white",
  fontWeight: "bold",
};

function SideNav({
  loading,
  categories,
  selectedCategory,
  setSelectedCategory,
}: Props) {
  return loading ? (
    <SkeletonText mt="1" noOfLines={8} spacing="6" skeletonHeight="2" />
  ) : (
    <>
      <Heading color="blue.400" fontSize={12} fontWeight="bold" mb={4}>
        CATEGORIAS
      </Heading>
      <VStack align="stretch">
        {categories.map((c) => (
          <Link
            onClick={() => setSelectedCategory(c)}
            px={2}
            py={1}
            borderRadius={5}
            {...(selectedCategory.strCategory === c.strCategory &&
              selectedProps)}
            key={c.strCategory}
            _hover={{ textDecoration: "none" }}
          >
            {c.strCategory}
          </Link>
        ))}
      </VStack>
    </>
  );
}

export default SideNav;
