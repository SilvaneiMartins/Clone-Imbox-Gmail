import React from "react";
import styled from "styled-components";
import { Grid, Typography, Link, makeStyles, Box } from "@material-ui/core";
import { getFooter } from "@mui-treasury/layout";

const useTextStyles = makeStyles({
    root: {
        fontSize: 12,
        color: "#666",
    },
});

const Footer = getFooter(styled);

const AppFooter = () => {
    const classes = useTextStyles();
    return (
        <Footer>
            
            <Box px={'1rem'} my={'1rem'}>
                <Grid container>

                    <Grid item xs={12} sm={4}>
                        <Typography classes={classes}>
                            47.43 GB (47%) of 100 GB used
                        </Typography>
                        <Link classes={classes}>Gerir</Link>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Box textAlign="center" color="#666">
                            <Link classes={classes}>Termos</Link> •{" "}
                            <Link classes={classes}>Privacidade</Link> •{" "}
                            <Link classes={classes}>Programa de Políticas </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Box textAlign="right">
                            <Typography classes={classes}>
                                Última atividade da conta: 22 minutos atrás
                            </Typography>
                            <Link classes={classes}>Detalhes</Link>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </Footer>
    );
};

export default AppFooter;
