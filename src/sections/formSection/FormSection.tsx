import React, { useEffect, useState } from "react";
import { useGetDataQuery } from "../../features/api/dataApi";
import styles from "./FormSection.module.scss";
import { useNavigate } from "react-router-dom";
import { IItem } from "../../types/types";
import { useEthers } from "@usedapp/core";

const FormSection: React.FC = () => {
  const [arrayOfItems, setArrayOfItems] = useState<IItem[]>([]);
  const [filled, setFilled] = useState<boolean>(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const { data } = useGetDataQuery();

  const { account } = useEthers();

  useEffect(() => {
    if (data) {
      setArrayOfItems(data.items);
    }
  }, [data]);

  const handleClick = () => {
    if (name && email) {
      const newItems = [...arrayOfItems];
      newItems.unshift({
        id: 21,
        username: name,
        email: email,
        address: account,
      });
      setArrayOfItems(newItems);
      setFilled(true);
    }
  };

  const handleDelete = (id: number) => {
    setArrayOfItems(arrayOfItems.filter((i) => i.id !== id));
    setFilled(false);
    setName("");
    setEmail("");
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.header}>BETA TEST REGISTRATION</p>
        <p className={styles.info}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          consequatur, odio voluptas beatae corporis eveniet. Itaque distinctio
          labore pariatur eius et necessitatibus dicta velit eum explicabo,
          similique, vero amet iusto! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Amet officia culpa nobis repellendus repellat iusto
          doloribus perferendis illum, quidem expedita nulla ullam iure totam
          veritatis maiores voluptate, consequatur pariatur!
        </p>
        <div>
          <p className={styles.inputInfo}>NAME</p>
          {filled ? (
            <p className={styles.header}>{name}</p>
          ) : (
            <input
              placeholder="We will display your email in participation list"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
        </div>
        <div>
          <p className={styles.inputInfo}>EMAIL</p>
          {filled ? (
            <p className={styles.header}>{email}</p>
          ) : (
            <input
              placeholder="We will display your email in participation list"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}
        </div>
        <button
          onClick={() => handleClick()}
          style={{ opacity: filled ? 0.4 : 1 }}
        >
          {filled ? "LIST ME TO THE TABLE" : "GET EARLY ACCESS"}
        </button>
      </div>
      {account ? (
        <div className={styles.table__content}>
          <p className={styles.table__header}>
            PARTICIPATION LISTING (ENABLE ONLY FOR PARTICIPANTS)
          </p>
          <table>
            <thead>
              <tr>
                <td>NAME</td>
                <td>EMAIL</td>
                <td>WALLET</td>
              </tr>
            </thead>
            <tbody>
              {arrayOfItems?.map((item, index) => (
                <tr
                  key={item.id}
                  onClick={() =>
                    index === 0 && filled ? null : navigate(`${item.id}`)
                  }
                  style={{ color: index === 0 && filled ? "#e75626" : "white" }}
                >
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>
                    {item.address} {"   "}
                    {index === 0 && filled ? (
                      <button
                        style={{ display: account ? "inline" : "none" }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(item.id);
                        }}
                      >
                        DELETE
                      </button>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default FormSection;
