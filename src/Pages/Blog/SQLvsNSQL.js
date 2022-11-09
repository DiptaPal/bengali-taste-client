import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const SQLvsNSQL = () => {
    useTitle('SQL vs NoSQL')
    return (
        <div className='max-w-5xl mx-auto flex flex-col gap-4 text-lg text-justify'>
            <img src="https://miro.medium.com/max/1012/1*Z5SpsmDvk67BIImwHvh_cQ.png" className='rounded-lg object-cover object-center' alt="" />
            <h2 className='text-2xl'>Difference between SQL and NoSQL</h2>
            <h4 className='font-bold text-lg'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</h4>
            <p>There are five practical differences between SQL and NoSQL:</p>
            <ol className='pl-5'>
                <li className='list-decimal'>Language</li>
                <li className='list-decimal'>Scalability</li>
                <li className='list-decimal'>Structure</li>
                <li className='list-decimal'>Properties</li>
                <li className='list-decimal'>Support and communities</li>
            </ol>
            <h2 className='text-2xl font-semibold'>1. Language</h2>
            <p>SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.</p>

            <p>The dynamic schemata of NoSQL databases allow representation of alternative structures, often alongside each other, encouraging greater flexibility. There is less emphasis on planning, greater freedom when adding new attributes or fields, and the possibility of varied syntax across databases. As a group, however, NoSQL languages lack the standard interface which SQL provides, so more complex queries can be difficult to execute.</p>

            <p>Though there are many dialects of SQL, all share a common syntax and almost-identical grammar. When querying relational databases, fluency in one language translates to proficiency in most others. On the other hand, there is very little consistency between NoSQL languages, as they concern a diverse set of unrelated technologies. Many NoSQL databases have a unique data manipulation language constrained by particular structures and capabilities.</p>

            <h2 className='text-2xl font-semibold'>2. Scalability</h2>
            <p>Most SQL databases can be scaled vertically, by increasing the processing power of existing hardware. NoSQL databases use a master-slave architecture which scales better horizontally, with additional servers or nodes. These are useful generalizations, but it’s important to note:</p>
            <ul className='pl-5'>
                <li className='list-disc'>SQL databases can be scaled horizontally as well, though sharding or partitioning logic is often the user’s onus and not well supported.</li>
                <li className='list-disc'>NoSQL technologies are diverse and while many rely on the master-slave architecture, options for scaling vertically also exist.</li>
                <li className='list-disc'>Savings made using more efficient data structures can overwhelm differences in scalability; most important is to understand the use case and plan accordingly.</li>
            </ul>

            <h2 className='text-2xl font-semibold'>3. Structure</h2>

            <p>SQL database schemata always represent relational, tabular data, with rules about consistency and integrity. They contain tables with columns (attributes) and rows (records), and keys have constrained logical relationships.</p>
            <p>NoSQL databases need not stick to this format, but generally fit into one of four broad categories:</p>
            <ul className='pl-5'>
                <li className='list-disc'><span className='font-semibold'>Column-oriented</span> databases transpose row-oriented RDBMSs, allowing efficient storage of high-dimensional data and individual records with varying attributes.</li>
                <li className='list-disc'><span className='font-semibold'>Key-Value </span> stores are dictionaries which access diverse objects with a key unique to each.</li>
                <li className='list-disc'><span className='font-semibold'>Document</span>  stores hold semi-structured data: objects which contain all of their own relevant information, and which can be completely different from each other.</li>
                <li className='list-disc'><span className='font-semibold'>Graph </span>databases add the concept of relationships (direct links between objects) to documents, allowing rapid traversal of greatly connected data sets.</li>
            </ul>

            <h2 className='text-2xl font-semibold'>4. Properties</h2>
            <p>At a high level, SQL and NoSQL comply with separate rules for resolving transactions. RDBMSs must exhibit four “ACID” properties:</p>
            <ul className='pl-5'>
                <li className='list-disc'><span className='font-semibold'>Atomicity</span>means all transactions must succeed or fail completely. They cannot be partially-complete, even in the case of system failure.</li>
                <li className='list-disc'><span className='font-semibold'>Consistency </span>means that at each step the database follows invariants: rules which validate and prevent corruption.Isolation prevents concurrent transactions from affecting each other. Transactions must result in the same final state as if they were run sequentially, even if they were run in parallel.</li>
                <li className='list-disc'><span className='font-semibold'>Durability</span>makes transactions final. Even system failure cannot roll-back the effects of a successful transaction.</li>
            </ul>
            <p>NoSQL technologies adhere to the “CAP” theorem, which says that in any distributed database, only two of the following properties can be guaranteed at once:</p>
            <ul className='pl-5'>
                <li className='list-disc'><span className='font-semibold'>Consistency:</span> Every request receives the most recent result, or an error. (Note this is different than in ACID)</li>
                <li className='list-disc'><span className='font-semibold'>Availability:</span> Every request has a non-error result, regardless of how recent that result is.</li>
                <li className='list-disc'><span className='font-semibold'>Partition tolerance:</span> Any delays or losses between nodes will not interrupt the system’s operation.</li>
            </ul>

            <h2 className='text-2xl font-semibold'>5. Support and communities</h2>
            <p>SQL databases represent massive communities, stable codebases, and proven standards. Multitudes of examples are posted online and experts are available to support those new to programming relational data.</p>
            <p>NoSQL technologies are being adopted quickly, but communities remain smaller and more fractured. However, many SQL languages are proprietary or associated with large single-vendors, while NoSQL communities benefit from open systems and concerted commitment to onboarding users.</p>
            <p>SQL is available to most major platforms, from operating systems to architectures and programming languages. Compatibility varies more widely for NoSQL, and dependencies need to be investigated more carefully.</p>

            <Link to={`/blog`}>
                <button className='w-full mt-4 py-3 font-medium bg-normalColor text-white transition duration-200 rounded-md shadow-md hover:bg-gray-300 hover:text-activeColor text-xl drop-shadow-md'>Go Back</button>
            </Link>
        </div>
    );
};

export default SQLvsNSQL;