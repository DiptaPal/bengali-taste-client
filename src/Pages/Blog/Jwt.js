import React from 'react';

const Jwt = () => {
    return (
        <div className='max-w-5xl mx-auto flex flex-col gap-4 text-lg text-justify'>
            <img src="https://miro.medium.com/max/800/1*ulCspc56K_swYE1uuel_TA.png" className='rounded-lg object-cover object-center' alt="" />
            <h2 className='text-2xl'>What is JWT, and how does it work?</h2>
            <h4 className='font-bold text-lg'>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</h4>
            
            <h2 className='text-2xl font-semibold'>What Is JSON?</h2>
            <p>For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML.</p>

            <h2 className='text-2xl font-semibold'>What Are Tokens?</h2>
            <p>Now that you understand JSON as a data text format, you may be wondering What are tokens? To put it simply, a token is a string of data that represents something else, such as an identity. In the case of authentication, a non-JWT based token is a string of characters that allow the receiver to validate the sender’s identity. The important distinction here is lack of meaning within the characters themselves. </p>

            <h2 className='text-3xl font-semibold'>How JWT Works</h2>

            <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
            <p>A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
            <p>Once decoded, you will get two JSON strings:</p>
            <ul className='pl-5'>
                <li className='list-decimal'>The <span className='font-semibold'>header</span> and the <span className='font-semibold'>payload</span>.</li>
                <li className='list-decimal'>The<span className='font-semibold'>signature.</span></li>
            </ul>

            <p>The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.</p>
           <p>The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.</p>
           <p>There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.</p>

            <p>The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.</p>
        </div>
    );
};

export default Jwt;