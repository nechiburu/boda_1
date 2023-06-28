import React from 'react'
import Link from 'next/link'
import Projects from '../../api/projects'
import Image from 'next/image';
import Logo from '/public/images/logo.png'
import { FaTiktok } from 'react-icons/fa';

const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Image src={Logo} alt="logo" />
                                </div>
                                <p>Welcome and open yourself to your truest love this year with us! With the Release
                                    Process</p>
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} href="https://www.facebook.com/viajestravelerobo" target="_blank" rel="noopener noreferrer">
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="https://www.instagram.com/viajestravelero/" target="_blank" rel="noopener noreferrer">
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="https://www.youtube.com/channel/UCy-hLSNYh_squF5AZZ_B3Fw" target="_blank" rel="noopener noreferrer">
                                            <i className="ti-youtube"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="https://www.tiktok.com/@viajestravelero?lang=es" target="_blank" rel="noopener noreferrer">
                                            <FaTiktok />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Information</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/about">About Us</Link></li>
                                    <li><Link onClick={ClickHandler} href="/portfolio">Portfolio</Link></li>
                                    <li><Link onClick={ClickHandler} href="/blog">Latest News</Link></li>
                                    <li><Link onClick={ClickHandler} href="/contact">Contact us</Link></li>
                                    <li><Link onClick={ClickHandler} href="/service">Our Services</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                <div className="contact-ft">
                                    <p>Would you have any enquiries.Please feel free to contuct us</p>
                                    <ul>
                                        <li><i className="fi flaticon-email"></i>loveme@gmail.com</li>
                                        <li><i className="fi flaticon-phone-call"></i>+888 (123) 869523</li>
                                        <li><i className="fi flaticon-maps-and-flags"></i>New York – 1075 Firs Avenue
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget instagram">
                                <div className="widget-title">
                                    <h3>Instagram</h3>
                                </div>
                                <ul className="d-flex">
                                    {Projects.slice(0, 6).map((project, pitem) => (
                                        <li key={pitem}><Link onClick={ClickHandler} href='/project/[slug]' as={`/project/${project.slug}`}><img src={project.pimg1} alt="" /></Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> &copy; 2022 Loveme Template. Design By <Link onClick={ClickHandler} href="/">wpOceans</Link>. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;