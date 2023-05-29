import { Box } from "@chakra-ui/react";
import Nav from "./nav";


const Layout = ({children}) => {
    return (
        <Box bg={'brand.100.1'} pb={10}>
            <Nav/>
            {children}
        </Box>
    );
}

export default Layout;