'use client'
import { useState } from "react"

export default () => {

    const tableItems = [
        {
            label: "Episodes",
            title: "Available",
            items: [
                {
                    prop: "Episode 1",
                    link: "../epone"
                },
                {
                    prop: "Episode 2",
                    link: "../eptwo"
                },
                {
                    prop: "Episode 3",
                    link: "../epthree"
                },
                {
                    prop: "Episode 4",
                    link: "../epfour"
                },
                {
                    prop: "Episode 5",
                    link: "../epfive"
                },
            ]
        }
    ]

    const [selectedItem, setSelectedItem] = useState(0)

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-lg">
                <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                    Reports
                </h3>
                <p className="text-gray-600 mt-2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
            <div className="text-sm mt-12 overflow-x-auto">
                <ul role="tablist" className="w-full border-b flex items-center gap-x-3 overflow-x-auto">
                    {
                        tableItems.map((item, idx) => (
                            <li key={idx} className={`py-2 border-b-2 ${selectedItem === idx ? "border-indigo-600 text-indigo-600" : "border-white text-gray-500"}`}>
                                <button
                                    role="tab"
                                    aria-selected={selectedItem === idx}
                                    aria-controls={`tabpanel-${idx + 1}`}
                                    className="py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
                                    onClick={() => setSelectedItem(idx)}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))
                    }
                </ul>
                <table className="w-full table-auto text-left">
                    <thead className="text-gray-600 font-medium border-b">
                        <tr>
                            <th className="w-1/2 py-4 pr-6">{tableItems[selectedItem].title}</th>
                            <th className="w-1/2 py-4 pr-6">Link</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems[selectedItem].items.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.prop}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">{item.link}</a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
