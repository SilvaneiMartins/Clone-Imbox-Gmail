import React from "react";
import styled from "styled-components";
import {
    Box,
    IconButton,
    MenuItem,
    Checkbox,
    ListItemIcon,
    makeStyles,
} from "@material-ui/core";
import MoreVert from "@material-ui/icons/MoreVert";
import Refresh from "@material-ui/icons/Refresh";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Settings from "@material-ui/icons/Settings";
import Keyboard from "@material-ui/icons/Keyboard";
import Edit from "@material-ui/icons/Edit";
import Inbox from "@material-ui/icons/Inbox";
import LocalOffer from "@material-ui/icons/LocalOffer";
import People from "@material-ui/icons/People";
import Info from "@material-ui/icons/Info";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
import { useRowGutterStyles } from "@mui-treasury/styles/gutter/row";
import ArrowMenu from "@mui-treasury/components/menu/arrow";
import { GmailTabs, GmailTabItem } from "@mui-treasury/components/tabs/gmail";
import MailListItem from "./MailListItem";

const Div = styled("div")`
  height: 48px;
  padding: 0 16px;
  box-shadow: inset 0 -1px 0 0 rgba(100, 121, 143, 0.122);
  display: flex;
  align-items: center;
`;

const useStyles = makeStyles(() => ({
    root: {
        fontSize: 14,
        paddingLeft: 32,
        width: 160,
    },
}));

const useCheckboxStyles = makeStyles(({ palette }) => ({
    checked: {
        color: palette.text.primary,
    },
}));

const AppContent = () => {
    const actionStyles = useSizedIconButtonStyles({ padding: 8, childSize: 20 });
    const gutterStyles = useRowGutterStyles({ size: "0.25rem" });
    const menuItemClasses = useStyles();
    const checkboxClasses = useCheckboxStyles();
    const [index, setIndex] = React.useState(0);
    return (
        <>
            <Div>
                <Box display="inline-flex" className={gutterStyles.parent}>
                    <ArrowMenu
                        renderElement={({ styles, onClose }) => (
                            <Checkbox
                                classes={checkboxClasses}
                                className={styles.button}
                                color={"default"}
                                onChange={onClose}
                            />
                        )}
                    >
                        <MenuItem classes={menuItemClasses}>Tudo</MenuItem>
                        <MenuItem classes={menuItemClasses}>Nenhum</MenuItem>
                        <MenuItem classes={menuItemClasses}>Ler</MenuItem>
                        <MenuItem classes={menuItemClasses}>Não lida</MenuItem>
                    </ArrowMenu>
                    <IconButton classes={actionStyles}>
                        <Refresh />
                    </IconButton>
                    <IconButton classes={actionStyles}>
                        <MoreVert />
                    </IconButton>
                </Box>
                <Box
                    display="inline-flex"
                    alignItems="center"
                    ml="auto"
                    className={gutterStyles.parent}
                >
                    <Box fontSize={12} color="text.secondary">
                        1-50 of 1,971
          </Box>
                    <IconButton disabled classes={actionStyles}>
                        <KeyboardArrowLeft />
                    </IconButton>
                    <IconButton classes={actionStyles}>
                        <KeyboardArrowRight />
                    </IconButton>
                    <ArrowMenu
                        renderElement={({ styles, onClose }) => (
                            <IconButton
                                className={styles.button}
                                color={"default"}
                                onChange={onClose}
                            >
                                <Keyboard />
                            </IconButton>
                        )}
                    >
                        <MenuItem classes={menuItemClasses}>
                            <ListItemIcon style={{ minWidth: 32 }}>
                                <Edit fontSize={"small"} />
                            </ListItemIcon>
              English
              Brasil
            </MenuItem>
                    </ArrowMenu>
                    <IconButton classes={actionStyles}>
                        <Settings />
                    </IconButton>
                </Box>
            </Div>
            <GmailTabs value={index} onChange={(_, value) => setIndex(value)}>
                <GmailTabItem icon={<Inbox />} label={"Primário"}
                    subLabel={"E-mail principais"} />
                <GmailTabItem
                    icon={<People />}
                    label={"Social"}
                    tag={"2 nova"}
                    subLabel={"Youtube, LinkedIn"}
                />
                <GmailTabItem
                    icon={<LocalOffer />}
                    label={"Promoções"}
                    subLabel={"Pattern Matching, Medium Daily"}
                />
                <GmailTabItem icon={<Info />} label={"Atualizações"} tag={"15 nova"} subLabel={"Atualizações do E-mail"} />
            </GmailTabs>
            {getMailList().map((mail, i) => (
                <MailListItem key={i} {...mail} />
            ))}
        </>
    );
};

const getMailList = () => [
    {
        starred: true,
        labeled: true,
        title: (
            <>
                <b>Silvanei Martins</b>
                <span>3</span>
            </>
        ),
        description: (
            <>
                <b>Seu email foi recibo</b> - Ok, então estou construindo uma plataforma de descoberta de carreira.
         O usuário deve poder se registrar ou entrar e explorar um
         ferramenta interativa de carreira.
            </>
        ),
        date: <b>Julho 2020</b>,
    },
    {
        labeled: true,
        read: true,
        title: (
            <>
                <span>Silvio Martins</span>
                <span>8</span>
            </>
        ),
        description: "Tesouro MUI - Uma pergunta rápida e obrigado :)",
        date: "Julho 2020",
    },
    {
        labeled: true,
        read: true,
        title: "Alerta de Segurança",
        description:
            "Alerta de segurança - o iMovie recebeu acesso à sua Conta do Google xxx Se você não concedeu acesso, verifique esta atividade e proteja sua conta. Verificar atividade Você recebeu este email para",
        date: "Julho 2020",
    },
    {
        read: true,
        title: "Alerta de Segurança",
        description:
            "Verificação em duas etapas ativada - Verificação em duas etapas ativada xxx Sua conta do Google xxx agora está protegida com a verificação em duas etapas. Ao entrar em um dispositivo novo ou não confiável, você",
        date: "Junho 2020",
    },
    {
        read: true,
        labeled: true,
        title: "Roberto Silva",
        description:
            "Re: [samEmail/Cobrança] [docs] Atualizar links para o sam-tesouraria (#21054)",
        date: "Abril 2020",
    },
    // {
    //     labeled: true,
    //     read: true,
    //     title: "Alexandre Teyar",
    //     description:
    //         "[siriwatknp/mui-treasury] Sugestão de novo componente -> InsetHeader (#817)",
    //     date: "May 18",
    // },
    // {
    //     read: true,
    //     labeled: true,
    //     title: "Olivier Tassinari",
    //     description:
    //         "Re: [mui-org/material-ui] [docs] Melhore a integração do mui-tesouraria (#21054)",
    //     date: "May 16",
    // },
    // {
    //     read: true,
    //     labeled: true,
    //     title: (
    //         <>
    //             <span>Silvio Martins</span>
    //             <span>2</span>
    //         </>
    //     ),
    //     description:
    //         "Re: [mui-org/material-ui] [docs] Melhore a integração do mui-tesouraria (#21054)",
    //     date: "May 16",
    // },
    // {
    //     labeled: true,
    //     title: (
    //         <>
    //             <span>
    //                 James, me, <b>João Martins</b>
    //             </span>
    //             <span>3</span>
    //         </>
    //     ),
    //     description: (
    //         <>
    //             <b>Hello Jun!</b> - Ok, então estou construindo uma plataforma de descoberta de carreira.
    //      O usuário deve poder se registrar ou entrar e explorar um
    //      ferramenta interativa de carreira, faça perguntas ou
    //         </>
    //     ),
    //     date: <b>May 15</b>,
    // },
    // {
    //     read: true,
    //     labeled: true,
    //     title: "Alexandre Teyar",
    //     description: "[siriwatknp/mui-treasury] [Discussion] Menu aninhado (#798)",
    //     date: "May 14",
    // },
    // {
    //     read: true,
    //     labeled: true,
    //     title: "Aaron Hayes",
    //     description:
    //         "[siriwatknp/mui-treasury] [Discussion] Componentes do formulário  (#792)",
    //     date: "May 14",
    // },
    // {
    //     read: true,
    //     labeled: true,
    //     title: (
    //         <>
    //             <span>Olivier Tassinari</span>
    //             <span>6</span>
    //         </>
    //     ),
    //     description: "[mui-org/material-ui] [core] Pequenas alterações em lote (#20877)",
    //     date: "May 4",
    // },
    // {
    //     read: true,
    //     labeled: true,
    //     title: "webface",
    //     description:
    //         "Re: [siriwatknp/mui-treasury] A sobreposição não aparece no ponto de interrupção móvel, exceto em uma configuração predefinida (#686)",
    //     date: "May 3",
    // },
    // {
    //     read: true,
    //     label: true,
    //     title: "Alexandre Teyar",
    //     description:
    //         "Re: [siriwatknp/mui-treasury] Header default config not working (#714)",
    //     date: "May 3",
    // },
    // {
    //     read: true,
    //     labeled: true,
    //     title: "Siriwat",
    //     description:
    //         "Re: [siriwatknp/mui-treasury] Overlay does not appear in mobile breakpoint other than with a preset config (#686)",
    //     date: "Apr 29",
    // },
    // {
    //     read: true,
    //     label: true,
    //     title: "Mine",
    //     description:
    //         "Re: [siriwatknp/mui-treasury] Header default config not working (#714)",
    //     date: "Apr 29",
    // },
    // {
    //     labeled: true,
    //     title: "webface",
    //     description:
    //         "Re: [siriwatknp/mui-treasury] Overlay does not appear in mobile breakpoint other than with a preset config (#686)",
    //     date: "Apr 28",
    // },
    // {
    //     read: true,
    //     label: true,
    //     title: "Alexandre Teyar",
    //     description:
    //         "Re: [siriwatknp/mui-treasury] Header default config not working (#714)",
    //     date: "Apr 22",
    // },
    // {
    //     title: (
    //         <>
    //             <b>allcontributors[bot]</b>
    //             <span>2</span>
    //         </>
    //     ),
    //     description: (
    //         <b>
    //             [siriwatknp/mui-treasury] docs: add pacurtin as a contributor (#678)
    //         </b>
    //     ),
    //     date: "Apr 22",
    // },
    // {
    //     title: <b>allcontributors[bot]</b>,
    //     description: (
    //         <b>
    //             [siriwatknp/mui-treasury] docs: add aress31 as a contributor (#679)
    //         </b>
    //     ),
    //     date: "Apr 22",
    // },
    // {
    //     read: true,
    //     label: true,
    //     title: "Alice Wonder",
    //     description:
    //         "Lead / Senior Engineers For Bangkok",
    //     date: "Apr 21",
    // },
    // {
    //     read: true,
    //     labeled: true,
    //     title: "webface",
    //     description:
    //         "Re: [siriwatknp/mui-treasury] Overlay does not appear in mobile breakpoint other than with a preset config (#686)",
    //     date: "Mar 30",
    // },
    // {
    //     read: true,
    //     label: true,
    //     title: "Alexandre Teyar",
    //     description:
    //         "Re: [siriwatknp/mui-treasury] Header default config not working (#714)",
    //     date: "Mar 27",
    // },
];

export default AppContent;
