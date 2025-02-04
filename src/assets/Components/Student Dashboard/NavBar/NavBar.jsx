import React from 'react'
import "./NavBar.css";

const NavBar = () => {
        return (
                <div id='Navbar' className='w-[100%] h-[100%] bg-[#00173D] rounded-[4vmin] flex flex-col justify-start'>
                        <div id="logoCont" className=''>

                                <img id="logo" src="https://s3-alpha-sig.figma.com/img/569c/113d/9b40f56e05304dfc8eada37f75b82ef1?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lcKKGr0qemFTQmzGrZ4vPY6U91ssdg98j1pKD0oeKxsDXMSJp5xEX8pWKQU2pghGx1gWHIh1D0EMLBPzRHQtANx58fkVcsBv6htjx5pNCsTg-gQ-7~Z-mH6Eu7~A7gY92WQkiyZyAOuZNaLEXG-wSv5RlBEXXUPC-TA1y6AjGRPHoTF9hfOrYqD0REQv-VekHlLFZkOvuw1lFbEWbOmi5GjtxqrXmjL6tokb~Nyeggc-NGkIUx0G-2ZAHJu7uq7YhBS~bhxQy~O7T-gnJACE-EKzhDXlVcvYCw-XxudWe6B-MSu6vY4mvjHqcC48FVDXdhnIDCQhYia4GvQcSFwm6Q__" alt="" />
                                {/* <img id="optionsvg" src="src\assets\Components\Student Dashboard\NavBar\NavBar Icons\Toogle.png" alt="" /> */}
                        </div>
                        <div id="userdetails">
                                <div id="detailsContainer">
                                        <div id="userimagecontainer">
                                                <img id='userImage' src="https://s3-alpha-sig.figma.com/img/8ada/4b5e/9db6fa638fd610ae56566f29347fa6cc?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X9qd70kPlhzEmzzUMjhDCScoEoPKpTKfSXPdUr3ArZKB7as3NEZpwbXNh4VqU0-EdKAl~Mqwm2n823Mcmc5CWbOIXN3hXyBEgDMUqhtqnFzAb4vSYWd4DVbih5SBVj9E4D2KLgeEDOzVt9Gqj5aVDwPvKQbLfu~Lys8doBz6VX-ifWs5nWMQfn5q~qFI~pWloBOkJ7-gUCaA4uX8ET1LugVEi~UUiG8QPb87UmSEfOd6QXyqbrxPo~7qpJqUT4aTuMEC9DECoCoR9L4nV7OxiRfG5chB5dAaQPteD6ZPV9tnUbgTkBHHyP5Jn1SicCr9gZ4SGkx5v9o-rhbi9l1WVA__" alt="" />
                                        </div>
                                        <div id="username" className="">
                                                <h6 id='namee' className='w-[100%] inline-block'>Hi Alex</h6>
                                                <h6 id='usercode' className='w-[100%] inline-block'>E173037</h6>
                                        </div>
                                </div>
                        </div>
                        {/* NavButtons */}
                        <div id="NavButtonsContainer">
                                <div id='button'>
                                        <img src="https://s3-alpha-sig.figma.com/img/6289/bdc4/404e9d6fb5c50844f45421bc7561639e?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OZcMEgdB4-EUNH69xM35Zgp6WYYC1psWaIOt5UAzSiPOXagKiFWDr5mpoSogjVoxYbe~EcVgaMCywfWY7K45Th1pBe3621IwgeeYwHvB0yTYwWZC-NSO~m15rGP5OXQuRoyteQIiIZqe72g~z8KXbK4XZF0N6ggoNhH5A839mU~CwKskrOuiDtgeYV8uxYY1ozWG65-ZxMOowtaC8bv66hnDrpqlCRH9ita43~Jonyb4x~ftEourXi1amyBwutKo1gplEr7ND3hsBF~u0vjQH0E-Z1cH5vr5u~wofKG8o067txMkLPY6KawiNOJR9C25JmViXnTIO9XPw3A-MHC-0w__" alt="" />
                                        {/* Home */}
                                        <p>Home</p>
                                </div>
                                <div id="button">
                                        <img src="https://s3-alpha-sig.figma.com/img/cc2e/cf60/aa37912235db83467ef0ec34182315d1?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BeDuXU9VA7wqpe8JHOFA1HYJqBBCCGYAhScdKw7TsNUSdFrewj5sJ2SRJ1T6Pb14riFoL3ivI8kzVdQDpy7lbPs7ZIbZ0fP58fPMvTgQnXoervqDPEWC2jzoXSFMdZQZGkl-DKp5Vy9EHkROI8nHgELQRM-q1PBEIhPBXvv5HplZCQHuaU9In8W0taNS2v-C1vIPBFe0RJQIQfNZAOEpnniorXr2~24jGJlXHV0mv3l-cn0BqPIy5F~ShB5Df3drprwD1CSOCp9cPzlGRcpbiA9HERJZtzADjQI0pepAuGBQeAhGBJKjtDWkLcSs7yKlOFP9j7Gjg9aTdELOJ6r3Xw__" alt="" />
                                        {/* Courses */}
                                        <p>My Courses</p>

                                </div>
                                <div id="button">
                                        <img src="https://s3-alpha-sig.figma.com/img/d2e1/1844/25e8e731549ce34dfc0532dd2423f005?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Yd26h3CmsYyAjE1Xjaq2CLR50hIzkgOTiL9wZBrOjCZtGdELfVMysALfaxHgYvAoG02I2Rolhu75w5bYbqN1ENTgrB4N9ozAvjrCBz4ztQdyEZCpxIVTpHVvNFV6bst~eNpTIszry8ixcF9WNB1JtwOxt44kqld-QdknAj8mrgLzT1cyld-4ElwnAhnBmxR70N9psp72QTb49VgJOS8gl3463EEjRyoshPxHYAdT0Qe7AvKgayyiDLVnMzXhbNeTT-0mfJdzy~jDPyVmcmNfH41CUGjHXpUXG7~p9ZyWUh~~vGggcKajqMCM-zLbrRV~sQawGlKkxf7zmX8FVxTT0A__" alt="" />
                                        {/* Assignments */}
                                        <p>Assignments </p>
                                </div>
                                <div id="button">
                                        <img src="https://s3-alpha-sig.figma.com/img/1530/50e6/acf7cf04f20aa52c8ff75252c99e7ac1?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=P8N6IiN7xIYLgaah6iyoxFqVcxUtqe4SBJtkVKmE5Qz4TWtLHKVmqomPRznzgyNXRTR16Lz~W~76QXBC1Jtw6rwto7K7mobFzTPsh-~Kd7koUt4~msqiGtUJKugJxr2GkY-403AaqSSg67IFtrp4J-vDPQP4xdfhzI9fPBNtjfCIKOxRhUSnLgYVVO8bd7apBsOslUMu6erJTN28cM7kHXA-S-wXhFgt66j-Zgwqz-cXakCuhyirYEB6E1OhpnnhNfKLTLTl~Dw1rz1JUHvBNyW7K-OcPF03qXVN7EeUIyGM3T6VpfWI4a2LjWrIBcczwc2HNY7dI2kZUx7Mmqr11A__" alt="" />
                                        {/* timeTable */}
                                        <p>Time Table</p>

                                </div>
                                <div id="button">
                                        <img src="https://s3-alpha-sig.figma.com/img/77fa/6634/e91dd46e72d7899fdc6f2d7e89db6460?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lF23EfBytcV62thdqm9gpg53xMlJMsPEMrZxiw8qvG8zg9G3oPIHZP5Bm5n68GyLBC2OkqgyL8hboRGRyHPcKmPvSLLA-dvoCVmj0IV4iiHrETm~PqD-~swtLU0iYHExCQgqHTumWk-X-DP3g1rqE0Nr5Is7~HsJxcOCy4siuMu7n842CjIfkqhb80VqKn~mq3oHOHnNnIX2Ef3Zrn0SLNy-DXmyFkAlE~D6OfoRZwAGN1EgX9FGmjbVYipD2B-kzhxgbpNcKwrDSpHog5JzA1NeDMYvau2LFx0oAg4baE4Qj0Pi52nI41~IgIkN3BLr6Q3Php-ZlJgOHPdzSvWkvA__" alt="" />
                                        <p>Forums</p>
                                        {/* Chat/Form */}
                                </div>
                                <div id='button'>
                                        <img src="https://s3-alpha-sig.figma.com/img/48e8/a33b/18fbc7c05542bae9ae92febd54f51bb8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Jl5qFY7RSyW6nPXRT5hWfXaMC1v~FmvO~FW8rraR5ZlhJY6BHVMSdcgY546s5y~XTkWBnYAgvyMBQIaJzIfRiwJW0WP~rjCH6Zv0TG~cb6BnvP6HIck4xQ~~HT1EPfLOpYjnbzAryD5NVx62KTDcJya0mqvasMoNvkot-jPI8hoeog7qiTJ0yZ792PaZcoCsBBPADUa69FOiMDxNwIsJxBwAPJbY4-3ESrky5k0XEWkSyNNoo85zxaXj-mli4y1li-~sMFwUo8iKeIfR7Vq8Lfvr6NsAF6kzEoDiMjK0Pn82oKFZfrL2ADt5gcy7zjdcvrh0o-TZy3pi2u6EB11pAw__" alt="" />
                                        {/* Setting */}
                                        <p>Setting</p>
                                </div>


                        </div>
                        <div></div>
                </div>
        )
}

export default NavBar