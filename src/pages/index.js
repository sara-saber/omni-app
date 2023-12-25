import ProductCard from "@/components/container/listItem/Card/ProductCard";
import { Get_Products } from "@/graphql/Query";
import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";

const Home = () => {
  const {data,loading}=useQuery(Get_Products)
  return (
    <Grid container gap={2}>
      <Grid>
        {console.log(data)}
        {data?.products.items.map((item)=>{
          console.log(item);
        <ProductCard data={item} ></ProductCard>
        })}
      </Grid>
    </Grid>
  );
}

export default Home;