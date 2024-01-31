import styles from '/src/app/ui/dashboard/blog/blog.module.css';

const BlogPage = () => {
  return (
    <div className={styles.centeredContainer}>
      <div className={styles.card}>
        <div className={styles.tagContainer}>
          <textarea placeholder="Tag" maxLength={10} className={styles.tag} />
          <textarea placeholder="Tag" maxLength={10} className={styles.tag} />
        </div>
        <textarea placeholder="Title" className={styles.title} maxLength={20} />
        <textarea placeholder="Description" className={styles.description} maxLength={100} />
        <textarea placeholder="Details" className={styles.details} maxLength={1000} />
        <div className={styles.button}>
          <button className={styles.save}>Save</button>
          <div className={styles.image}>
            <label>
              Choose File
              <input type="file" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
