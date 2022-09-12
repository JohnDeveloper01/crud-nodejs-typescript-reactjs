import { Request, Response } from "express";
import pool from "../config/connection";
// get all user
const getAllUser = async (req: Request, res: Response) => {
  try {
    const [user] = await pool.execute("select * from users");
    return res.status(200).json({
      message: "successfully",
      data: user,
    });
  } catch (error) {
    throw error;
  }
};
/**
 * get a user
 */
const findAUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const [user] = await pool.execute("select * from users where user_id = ?", [
      id,
    ]);
    return res.status(200).json({
      message: "successfully",
      data: user,
    });
  } catch (error) {
    throw error;
  }
};
/** create a new user */
const createNewUser = async (req: Request, res: Response) => {
  const { user_name, user_email, user_password } = req.body;
  if (!user_name || !user_email || !user_password) {
    return res.status(200).json({
      message: "Missing a little field",
    });
  }
  await pool.execute(
    "insert into users(user_name,user_password,user_email) values ('?','?','?')",
    [user_name, user_password, user_email]
  );
  return res.status(200).json({
    message: "successfully",
  });
};
// update User
const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const reg = new RegExp("^[0-9]+$");
    if (!reg.test(id)) {
      return res.status(200).json({
        message: "error",
      });
    }
    const { user_name, user_email, user_password } = req.body;
    if (!user_name || !user_email || !user_password) {
      return res.status(200).json({
        message: "Missing a little field",
      });
    }
    await pool.execute(
      "update users set user_name = ?,user_password = ?,user_email = ? where user_id = ?",
      [user_name, user_password, user_email, id]
    );
    return res.status(200).json({
      message: "successfully",
    });
  } catch (err) {
    throw err;
  }
};
//delete user
const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const reg = new RegExp("^[0-9]+$");
    if (!reg.test(id)) {
      return res.status(200).json({
        message: "error",
      });
    }
    await pool.execute("delete from users where user_id = ? ", [id]);
    return res.status(200).json({
      message: "successfully",
    });
  } catch (error) {
    throw error;
  }
};
export { getAllUser, findAUser, createNewUser, updateUser, deleteUser };
