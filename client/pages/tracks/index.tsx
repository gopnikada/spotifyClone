import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Box, Button, Card, Grid} from "@material-ui/core";
import {useRouter} from "next/router";

const Index = () => {
    const router = useRouter()
    const tracks = [
        {}
    ]
    return (
        <>
            <MainLayout>

               <Grid container justifyContent='center'>
                    <Card style={{width: 900}}>
                        <Box p={3}>
                            <Grid container justifyContent='space-between'>
                                <h1>Track list</h1>
                                <Button onClick={()=>router.push('/tracks/create')}>Upload</Button>
                            </Grid>
                        </Box>
                    </Card>
               </Grid>
            </MainLayout>
        </>
    );
};

export default Index;