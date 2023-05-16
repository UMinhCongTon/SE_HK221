import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./styles.module.scss";

const FormOfCollector = () => {
  return (
    <Form className={styles.form}>
      <Form.Group className={styles.formItem} controlId="duedate">
        <Form.Label>Thời gian thực hiện</Form.Label>
        <div style={{ display: "flex" }}>
          <Form.Control
            required
            type="date"
            name="duedate"
            placeholder="Due date"
            className={styles.formItemField}
            style={{marginRight: '10px'}}
          />
          <Form.Control
            required
            type="time"
            name="time"
            placeholder="Due time"
            className={styles.formItemField}
            style={{marginLeft: '10px'}}
          />
        </div>
      </Form.Group>

      <Form.Group className={styles.formItem}>
        <Form.Label>Khu vực</Form.Label>
        <Form.Select
          name="location"
          placeholder="Khu vực"
          className={styles.formItemField}
        >
          <option>Chọn khu vực</option>
          <option value="Lam">Lam</option>
          <option value="Son">Son</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className={styles.formItem}>
        <Form.Label>Nhân viên</Form.Label>
        <Form.Select
          name="location"
          placeholder="Nhân viên"
          className={styles.formItemField}
        >
          <option>Chọn nhân viên</option>
          <option value="Lam">Lam</option>
          <option value="Son">Son</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className={styles.formItem}>
        <Form.Label>Lộ trình</Form.Label>
        <Form.Select
          name="location"
          placeholder="Từ MCP"
          className={styles.formItemField}
        >
          <option>Từ MCP </option>
          <option value="Lam">Lam</option>
          <option value="Son">Son</option>
        </Form.Select>
        <Form.Select
          name="location"
          placeholder="Đến MCP"
          className={styles.formItemField}
        >
          <option>Đến MCP </option>
          <option value="Lam">Lam</option>
          <option value="Son">Son</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className={styles.formItem}>
        <Form.Label>Phương tiện</Form.Label>
        <Form.Select
          name="location"
          placeholder="Phương tiện"
          className={styles.formItemField}
        >
          <option>Chọn phương tiện</option>
          <option value="Lam">Lam</option>
          <option value="Son">Son</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className={styles.formItem}>
        <Form.Control
          required
          type="text"
          name="note"
          placeholder="Ghi chú"
          className={styles.formItemField}
        />
      </Form.Group>

      <Button className={styles.formBtn} variant="primary" type="submit">
        Tạo nhiệm vụ
      </Button>
    </Form>
  );
};
export default FormOfCollector;
