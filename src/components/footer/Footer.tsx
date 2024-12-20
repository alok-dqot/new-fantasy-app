import { Container } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { ReactElement, useEffect, useState } from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import useFooterStore from '@/features/footer/footer.service';


interface footerLink {
    title: string,
    link: any
}

type SocialMediaUrl = {
    [key: string]: ReactElement<any, any>;
};

const quicklink: footerLink = {
    title: 'Quick Link',
    link: [
        {
            name: 'About',
            url: 'about-us'
        },
        {
            name: 'Contact Us',
            url: 'contact-us'
        },

    ]
}

const legallink: footerLink = {
    title: 'Legal Links',
    link: [
        {
            name: 'Privacy Policy',
            url: 'privacy-policy'
        },
        {
            name: 'Disclaimer',
            url: 'disclaimer'
        },
        {
            name: 'Terms and Conditions',
            url: 'terms-condition'
        },

    ]
}



const logoDes = `Welcome to our Fantasy Cricket Playground, where your cricket knowledge transforms into strategic picks. With real-time scores and player performances, our platform amplifies your cricket experience, turning every ball, run, and wicket into a chance to score big in the fantasy league`
const socialIcons: SocialMediaUrl = {
    Facebook: <FacebookOutlinedIcon />,
    YouTube: <YouTubeIcon />,
    Instagram: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16" >
            <path name='insta' d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
        </svg>),
    Twitter: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
        <path name='twiiter' d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
    </svg>)
}

const Footer = () => {
    const route = useRouter()

    const store = useFooterStore()


    useEffect(() => {
        store.get.list()
    }, [route.isReady])


    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.scrollY > 300) {
            setShowScroll(true);
        } else if (showScroll && window.scrollY <= 300) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScroll]);








    return (
        <div className='footer-outer'>

            <div className="footer">

                <div className="whtsap-up">


                    {showScroll && <div className="up" onClick={scrollTop}>
                        <img src="/icons/up-arrow.png" alt="up arrow" />
                    </div>}
                </div>

                <Container className='footer-container' >
                    <div className="ftr-outer">


                        <div className="ftr-box">
                            <Image src={'/icons/logo.png'} alt=' logo' width={130} height={50} style={{ marginTop: '-10px' }} />
                            <p style={{ marginTop: '10px' }}>{logoDes.length < 120 ? logoDes : logoDes.slice(0, 120) + '...'}</p>
                        </div>
                        <FooterLinks
                            data={quicklink}
                        />
                        <FooterLinks
                            data={legallink}
                        />

                        <div className="ftr-link">
                            <h3>Reach Us</h3>
                            <div className="ftr-social-icons">
                                {store.footer?.list?.length > 0 && store.footer?.list?.map((url: any, index: number) => {
                                    return (
                                        <Link href={url?.url} target='_new' key={index} aria-label={url?.url} >{socialIcons[url?.name as keyof SocialMediaUrl]}</Link>
                                    )
                                })}

                            </div>



                            <Link href="tel:+919587458741"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M14.57 20.7791C14.8356 20.7807 15.0989 20.7293 15.3444 20.628C15.5899 20.5267 15.8128 20.3775 16 20.1891L18.71 17.4791C18.8963 17.2918 19.0008 17.0383 19.0008 16.7741C19.0008 16.5099 18.8963 16.2565 18.71 16.0691L14.71 12.0691C14.5227 11.8829 14.2692 11.7783 14.005 11.7783C13.7408 11.7783 13.4874 11.8829 13.3 12.0691L11.7 13.6591C10.5923 13.3638 9.56634 12.82 8.70003 12.0691C7.95115 11.2014 7.40766 10.176 7.11003 9.06913L8.70003 7.46913C8.88628 7.28177 8.99083 7.02832 8.99083 6.76413C8.99083 6.49995 8.88628 6.2465 8.70003 6.05913L4.70003 2.05913C4.51267 1.87288 4.25922 1.76834 3.99503 1.76834C3.73085 1.76834 3.4774 1.87288 3.29003 2.05913L0.590033 4.77913C0.401665 4.96637 0.252479 5.18926 0.15118 5.43478C0.049881 5.6803 -0.00150075 5.94354 3.33667e-05 6.20913C0.0907563 10.0514 1.62611 13.7184 4.30003 16.4791C7.06075 19.1531 10.7277 20.6884 14.57 20.7791ZM4.00003 4.18913L6.59003 6.77913L5.30003 8.06913C5.17785 8.18358 5.08636 8.32687 5.03395 8.48586C4.98153 8.64486 4.96987 8.81446 5.00003 8.97913C5.3738 10.6495 6.16514 12.1978 7.30003 13.4791C8.58039 14.6155 10.1291 15.407 11.8 15.7791C11.9622 15.813 12.1303 15.8061 12.2891 15.759C12.4479 15.7119 12.5926 15.626 12.71 15.5091L14 14.1891L16.59 16.7791L14.59 18.7791C11.2738 18.6937 8.10954 17.3703 5.72003 15.0691C3.41295 12.6786 2.08564 9.51024 2.00003 6.18913L4.00003 4.18913ZM18 9.77913H20C20.026 8.59013 19.8109 7.40819 19.3678 6.30454C18.9247 5.20089 18.2627 4.19838 17.4217 3.35743C16.5808 2.51648 15.5783 1.8545 14.4746 1.41139C13.371 0.968273 12.189 0.753202 11 0.779133V2.77913C11.9279 2.74704 12.8525 2.90614 13.7163 3.24657C14.5801 3.58699 15.3647 4.10145 16.0212 4.75797C16.6777 5.41449 17.1922 6.19904 17.5326 7.06284C17.873 7.92664 18.0321 8.85123 18 9.77913Z" fill="white" />
                                <path d="M11 6.77911C13.1 6.77911 14 7.67911 14 9.77911H16C16 6.55911 14.22 4.77911 11 4.77911V6.77911Z" fill="white" />
                            </svg> +91 9587458741</Link>


                            <Link href='mailto:mysportswiz@gmail.com'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 24 19" fill="none">
                                <path d="M0.363027 4.27795C0.40472 3.32649 0.812046 2.42782 1.50009 1.76932C2.18813 1.11081 3.10379 0.743281 4.05617 0.743347H19.6633C20.6157 0.743281 21.5314 1.11081 22.2194 1.76932C22.9074 2.42782 23.3148 3.32649 23.3565 4.27795L22.144 4.95153L11.8597 10.4888L1.57546 4.95153L0.363027 4.27795ZM0.359741 6.15492V15.1183C0.359741 16.0987 0.749185 17.0389 1.4424 17.7321C2.13561 18.4253 3.07582 18.8148 4.05617 18.8148H19.6633C20.6437 18.8148 21.5839 18.4253 22.2771 17.7321C22.9703 17.0389 23.3597 16.0987 23.3597 15.1183V6.15492L22.9277 6.3956L12.2491 12.1456C12.1294 12.21 11.9956 12.2437 11.8597 12.2437C11.7238 12.2437 11.5901 12.21 11.4704 12.1456L0.781955 6.38985L0.359741 6.15492Z" fill="white" />
                            </svg> tempmail@gmail.com</Link>
                        </div>
                    </div>

                </Container>
                <CopyRight />
            </div>
        </div>
    )
}



export default Footer;


const FooterLinks = (data: any) => {



    return (

        <div className="ftr-link">
            <h3>{data?.data?.title}</h3>

            {
                data?.data?.link?.map((list: any, index: number) => (
                    <Link href={`/${list.url}`} key={index}> <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none" >
                        <path d="M1.556 12.2791L7.056 6.77905L1.556 1.27905" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> {list.name}</Link>
                ))
            }


        </div>

    )
}


const CopyRight = () => {
    return (
        <>
            <p className='ftr-copyright'>Copyright &copy; LiveScorewebsite All Rights Reserved.</p>
        </>
    )
}