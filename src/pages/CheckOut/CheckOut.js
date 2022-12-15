import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import style from "./CheckOut.module.scss";
import { removeAllItem } from "src/pages/SingleProduct/redux/cartSlice";

const cx = classNames.bind(style);
function CheckOut() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const arrayListProduct = cart?.map((product) => ({
    productDetailId: product.id,
    qty: product.quantity,
  }));
  // console.log(arrayListProduct)
  const [dataCart, setDataCart] = useState({
    name: "",
    address: "",
    numberPhone: "",
    note: null,
    listProducts: arrayListProduct,
  });
  // console.log(dataCart)
  const [error, setError] = useState(false);
  const initialValues = { name: "", address: "", numberPhone: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setDataCart((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    (async function () {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        try {
          await axios.post("https://api.levanphuc.asia/api/v1/order", dataCart);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Success",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
          setTimeout(() => {
            dispatch(removeAllItem());
            navigate("/");
          }, 1500);
        } catch (err) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
          console.log(err);
          setError(true);
        }
      } else {
        console.log("error");
      }
    })();
    // eslint-disable-next-line
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const number = /^[0-9]+$/;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.numberPhone) {
      errors.numberPhone = "Number is required!";
    } else if (!number.test(values.numberPhone)) {
      errors.numberPhone = "This is not a valid number format!";
    }
    if (!values.address) {
      errors.address = "Number is required!";
    }
    return errors;
  };

  const getTotal = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice };
  };
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  const totalPrice = getTotal().totalPrice;
  const priceTotalString = getText(totalPrice.toLocaleString().concat("đ"));
  return (
    <>
      {cart.length > 0 ? (
        <div className={cx("wrap")}>
          <div className="grid wide">
            <div className={cx("heading")}>Thanh toán</div>
            <div className="wide row">
              <div className="wide l-8 m-6 c-12">
                <form>
                  <div className={cx("form")}>
                    <h3>Thông tin nhận hàng</h3>

                    <div className={cx("wrap-information")}>
                      <div className={cx("wrap-input_small")}>
                        <input
                          spellCheck="false"
                          className={cx("input-small")}
                          placeholder="Họ và tên"
                          name="name"
                          value={formValues.name}
                          onChange={handleChange}
                        />
                        <p>{formErrors.name}</p>
                      </div>

                      <div className={cx("wrap-input_small")}>
                        <input
                          spellCheck="false"
                          className={cx("input-small")}
                          placeholder="Số điện thoại"
                          name="numberPhone"
                          value={formValues.numberPhone}
                          onChange={handleChange}
                        />
                        <p>{formErrors.numberPhone}</p>
                      </div>
                    </div>

                    <div className={cx("wrap-option__buy")}>
                      <div className={cx("wrap-information")}>
                        <div className={cx("wrap-input_large")}>
                          <label>Địa chỉ</label>
                          <input
                            spellCheck="false"
                            className={cx("input-large")}
                            placeholder="Địa chỉ"
                            name="address"
                            value={formValues.address}
                            onChange={handleChange}
                          />
                          <p>{formErrors.address}</p>
                        </div>
                      </div>
                      <div className={cx("wrap-information")}>
                        <div className={cx("wrap-input_large")}>
                          <label>Ghi chú</label>
                          <textarea
                            spellCheck="false"
                            className={cx("input-large")}
                            placeholder="Ghi chú (không bắt buộc)"
                            name="note"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="wide l-4 m-6 c-12">
                <form>
                  <div className={cx("form")}>
                    <h3>
                      Mỗi đơn hàng được đặt 1 sản phẩm. Nếu bạn chọn nhiều sản
                      phẩm, hệ thống sẽ chỉ ghi nhận sản phẩm ở trên cùng.
                    </h3>
                    <p>
                      Nếu bạn muốn mua thêm sản phẩm, bạn có thể tạo đơn hàng
                      mới.
                    </p>
                    <div className={cx("wrap-cart")}>
                      {cart &&
                        cart?.map((product, idx) => (
                          <div className={cx("product-cart")} key={idx}>
                            <img
                              className={cx("cart-img")}
                              src={product.image}
                              alt=""
                            />
                            <div className={cx("wrapper-cart")}>
                              <div className={cx("name-cart")}>
                                {product.name} {product.storage}
                              </div>
                              <p className={cx("price-cart")}>
                                {product.quantity} x{" "}
                                {getText(
                                  product.price.toLocaleString().concat("đ")
                                )}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                    <div className={cx("wrap-total")}>
                      <h3>Total:</h3>
                      <h3>{priceTotalString}</h3>
                    </div>
                    <div className={cx("wrap-pay")}>
                      <div className={cx("cart-buy")} onClick={handleSubmit}>
                        Đặt hàng
                      </div>
                    </div>
                    {error && (
                      <p style={{ color: "red" }}>Something went wrong!</p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={cx("wrap")}>
          <div className="grid wide">
            <div className={cx("heading")}>Giỏ hàng</div>
            <div className={cx("wrap-note")}>
              <FontAwesomeIcon icon={faCircleExclamation} />
              <p>Chưa có sản phẩm nào trong giỏ hàng</p>
            </div>
            <div className={cx("margin-top")}>
              <Link to="/" className={cx("button-backtoshop")}>
                Quay trở lại cửa hàng
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CheckOut;
