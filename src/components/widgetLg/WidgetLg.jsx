import React from "react";
import "./widgetLg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetTh">Customer</th>
            <th className="widgetTh">Date</th>
            <th className="widgetTh">Amount</th>
            <th className="widgetTh">Status</th>
          </tr>

          {/*1st tr starts here*/}
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                className="widgetLgImg"
                alt=""
              />
              <span className="widgetLgName">Ojotule Smith</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          {/*1st tr ends here*/}

          {/*2nd tr starts here*/}
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                className="widgetLgImg"
                alt=""
              />
              <span className="widgetLgName">Ojonugwa Martins</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          {/*2nd tr ends here*/}

          {/*3rd tr starts here*/}
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                className="widgetLgImg"
                alt=""
              />
              <span className="widgetLgName">Ojonugwa Martins</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="ending" />
            </td>
          </tr>
          {/*3rd tr starts here*/}

          {/*4th tr starts here*/}
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                className="widgetLgImg"
                alt=""
              />
              <span className="widgetLgName">Ojonugwa Martins</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
        {/*4th tr starts here*/}
      </table>
    </div>
  );
};

export default WidgetLg;
